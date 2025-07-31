import FeedBackCard from './FeedBackCard';
import data from '../../../data.json';
// import data from 'client/src/data.json';

const Feedbacks = () => {
  const feedbacks = data.productRequests;
  console.log(feedbacks);

  return (
    <div className="mt-[12rem] flex flex-col items-center w-full justify-center gap-3 bg-[#F7F8FD]">
      {feedbacks.map((feedback) => (
        <FeedBackCard
          key={feedback.id}
          {...feedback}
        />
      ))}
    </div>
  );
};

export default Feedbacks;
