// FRONTEND API
export const API = import.meta.env.VITE_API || "http://localhost:8000/v1/api";

// FEEDBACK SLICE //

export interface Reply {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
}

export interface FeedbackState {
  upvotes: Record<number, number>;
  userUpvotes: Record<number, boolean>;
  comments: Comment[];
}
// AUTH SLICE
export interface AuthUser {
  image: string;
  name: string;
  username: string;
  token?: string; // if your backend sends token in user object
}

export interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}
