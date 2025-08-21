// routes/feedbackRoutes.ts
import express from 'express';
import {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  addComment,
  addReply,
} from '../controllers/feedbackController';

const router = express.Router();

router.get('/', getAllFeedbacks);
router.get('/:id', getFeedbackById);
router.post('/', createFeedback);
router.post('/:id/comments', addComment);
router.post('/comments/:commentId/replies', addReply);

export default router;
