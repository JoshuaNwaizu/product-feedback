// models/Feedback.ts
import mongoose, { Schema, Document, Types } from 'mongoose';

interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IReply extends Document {
  content: string;
  replyingTo: string;
  user: IUser;
}

export interface IComment extends Document {
  content: string;
  user: IUser;
  replies: Types.DocumentArray<IReply>;
}

export interface IFeedback extends Document {
  title: string;
  category: string;
  upvotes: number;
  status: 'suggestion' | 'planned' | 'in-progress' | 'live';
  description: string;
  comments: Types.DocumentArray<IComment>;
}

const UserSchema = new Schema<IUser>(
  {
    image: String,
    name: String,
    username: String,
  },
  { _id: false },
);

const ReplySchema = new Schema<IReply>(
  {
    content: { type: String, required: true },
    replyingTo: { type: String, required: true },
    user: { type: UserSchema, required: true },
  },
  { _id: false },
);

const CommentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    user: { type: UserSchema, required: true },
    replies: { type: [ReplySchema], default: [] },
  },
  { timestamps: true },
);

const FeedbackSchema = new Schema<IFeedback>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['suggestion', 'planned', 'in-progress', 'live'],
      default: 'suggestion',
    },
    description: { type: String, required: true },
    comments: { type: [CommentSchema], default: [] },
  },
  { timestamps: true },
);

export default mongoose.model<IFeedback>('Feedback', FeedbackSchema);
