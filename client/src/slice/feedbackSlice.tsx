import type { RootState } from "@/store";
import {
  API,
  type Comment,
  type FeedbackState,
  type Reply,
} from "@/types/typesSlice";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: FeedbackState = {
  upvotes: {},
  userUpvotes: {},
  comments: [],
};
// Fetch all feedbacks
export const fetchFeedbacks = createAsyncThunk(
  "feedback/fetchFeedbacks",
  async () => {
    const res = await axios.get(API);
    return res.data;
  },
);

// Add comment to a specific feedback

export const postComment = createAsyncThunk(
  "feedback/postComment",
  async ({
    feedbackId,
    content,
    user,
  }: {
    feedbackId: string;
    content: string;
    user: any;
  }) => {
    const res = await axios.post(`/api/feedback/${feedbackId}/comments`, {
      content,
      user,
    });
    return res.data.comments; // backend returns updated comments
  },
);
// Add reply to a comment
export const postReply = createAsyncThunk(
  "feedback/postReply",
  async ({
    commentId,
    content,
    replyingTo,
    user,
  }: {
    commentId: string;
    content: string;
    replyingTo: string;
    user: Reply["user"];
  }) => {
    const res = await axios.post(`${API}/comments/${commentId}/replies`, {
      content,
      replyingTo,
      user,
    });
    return res.data; // backend returns updated feedback
  },
);
const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    initializeUpvotes: (
      state,
      action: PayloadAction<Record<number, number>>,
    ) => {
      state.upvotes = action.payload;
    },
    toggleUpvote: (state, action: PayloadAction<number>) => {
      const feedbackId = action.payload;
      if (state.userUpvotes[feedbackId]) {
        state.upvotes[feedbackId] -= 1;
        state.userUpvotes[feedbackId] = false;
      } else {
        state.upvotes[feedbackId] = (state.upvotes[feedbackId] || 0) + 1;
        state.userUpvotes[feedbackId] = true;
      }
    },
    initializeComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (
      state,
      action: PayloadAction<{ content: string; user: Comment["user"] }>,
    ) => {
      const newComment: Comment = {
        id: Date.now(), // Using timestamp as a simple ID
        content: action.payload.content,
        user: action.payload.user,
        replies: [],
      };
      state.comments.push(newComment);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        // action.payload = full feedback array from backend
        // If you want to keep comments separate:
        state.comments = action.payload.flatMap(
          (feedback: any) => feedback.comments || [],
        );
      })

      .addCase(postReply.fulfilled, (state, action) => {
        // action.payload = updated feedback
        const updatedFeedback = action.payload;
        state.comments = updatedFeedback.comments;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const { initializeComments, addComment } = feedbackSlice.actions;

// Selectors
export const { initializeUpvotes, toggleUpvote } = feedbackSlice.actions;
export const selectUpvotes = (state: RootState) => state.feedback.upvotes;
export const selectUserUpvoteStatus = (state: RootState) =>
  state.feedback.userUpvotes;
export const selectComments = (state: RootState) => state.feedback.comments;

export default feedbackSlice.reducer;
