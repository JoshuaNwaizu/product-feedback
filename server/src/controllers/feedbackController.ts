// controllers/feedbackController.ts
import { Request, Response } from 'express';
import Feedback from '../models/feedbackModel';

// Get all feedbacks
export const getAllFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedbacks', error: err });
  }
};

// Get single feedback by ID
export const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback)
      return res.status(404).json({ message: 'Feedback not found' });
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedback', error: err });
  }
};

// Create feedback
export const createFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ message: 'Error creating feedback', error: err });
  }
};

// Add a comment to feedback
export const addComment = async (req: Request, res: Response) => {
  try {
    const { content, user } = req.body;
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback)
      return res.status(404).json({ message: 'Feedback not found' });

    feedback.comments?.push({ content, user });
    await feedback.save();

    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ message: 'Error adding comment', error: err });
  }
};

// Add a reply to a comment
export const addReply = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const { content, replyingTo, user } = req.body;

    const feedback = await Feedback.findOne({ 'comments._id': commentId });
    if (!feedback)
      return res.status(404).json({ message: 'Comment not found' });

    const comment = feedback.comments?.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    comment.replies?.push({ content, replyingTo, user });
    await feedback.save();

    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ message: 'Error adding reply', error: err });
  }
};
