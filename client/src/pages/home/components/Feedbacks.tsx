import FeedBackCard from "./FeedBackCard";
import data from "../../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { initializeUpvotes, selectUpvotes } from "@/slice/feedbackSlice";
import { useEffect } from "react";
// import data from 'client/src/data.json';

const Feedbacks = () => {
  const dispatch = useDispatch();
  const storedUpvotes = useSelector(selectUpvotes);
  const feedbacks = data.productRequests;
  console.log(feedbacks);
  // Initialize upvotes from data.json
  useEffect(() => {
    const initialUpvotes = feedbacks.reduce(
      (acc, feedback) => {
        acc[feedback.id] = feedback.upvotes;
        return acc;
      },
      {} as Record<number, number>,
    );

    dispatch(initializeUpvotes(initialUpvotes));
  }, [dispatch, feedbacks]);

  return (
    <div className="mt-[12rem] flex w-full flex-col items-center justify-center gap-3 bg-[#F7F8FD]">
      {feedbacks.map((feedback) => (
        <FeedBackCard
          key={feedback.id}
          {...feedback}
          upvotes={storedUpvotes[feedback.id] ?? feedback.upvotes}
        />
      ))}
    </div>
  );
};

export default Feedbacks;
