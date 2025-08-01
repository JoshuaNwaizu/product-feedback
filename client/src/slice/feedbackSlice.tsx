// import type { RootState } from "@/store";
// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface FeedbackState {
//   upvotes: Record<number, number>; // { feedbackId: upvoteCount }
//   upvotedByUser: Record<number, boolean>; // Track if user has upvoted
// }

// const initialState: FeedbackState = {
//   upvotes: {},
//   upvotedByUser: {},
// };

// const feedbackSlice = createSlice({
//   name: "feedback",
//   initialState,
//   reducers: {
//     setUpvotes: (state, action: PayloadAction<Record<number, number>>) => {
//       state.upvotes = action.payload;
//     },
//     upvote: (state, action: PayloadAction<number>) => {
//       const feedbackId = action.payload;
//       if (state.upvotedByUser[feedbackId]) {
//         // If already upvoted, remove the upvote
//         state.upvotes[feedbackId] = (state.upvotes[feedbackId] || 1) - 1;
//         state.upvotedByUser[feedbackId] = false;
//       } else {
//         // If not upvoted, add an upvote
//         state.upvotes[feedbackId] = (state.upvotes[feedbackId] || 0) + 1;
//         state.upvotedByUser[feedbackId] = true;
//       }
//     },
//   },
// });

// export const { setUpvotes, upvote } = feedbackSlice.actions;

// // Selectors
// export const selectUpvotes = (state: RootState) => state.feedback.upvotes;
// export const selectUpvotedStatus = (state: RootState) =>
//   state.feedback.upvotedByUser;

// export default feedbackSlice.reducer;
// features/feedback/feedbackSlice.ts

import type { RootState } from "@/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FeedbackState {
  upvotes: Record<number, number>; // { feedbackId: totalUpvotes }
  userUpvotes: Record<number, boolean>; // { feedbackId: hasUserUpvoted }
}

const initialState: FeedbackState = {
  upvotes: {},
  userUpvotes: {},
};

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
        // User is removing their upvote
        state.upvotes[feedbackId] -= 1;
        state.userUpvotes[feedbackId] = false;
      } else {
        // User is adding their upvote
        state.upvotes[feedbackId] = (state.upvotes[feedbackId] || 0) + 1;
        state.userUpvotes[feedbackId] = true;
      }
    },
  },
});

export const { initializeUpvotes, toggleUpvote } = feedbackSlice.actions;

// Selectors
export const selectUpvotes = (state: RootState) => state.feedback.upvotes;
export const selectUserUpvoteStatus = (state: RootState) =>
  state.feedback.userUpvotes;

export default feedbackSlice.reducer;
