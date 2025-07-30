import { useParams } from "react-router";
import FeedBackCard from "../home/components/FeedBackCard";
import data from "../../data.json"; // Adjust the path as necessary
import FeedbackNav from "./components/FeedbackNav";
import FeedBackComments from "./components/FeedBackComments";
import AddCommentCard from "./components/AddCommentCard";

const FeedbackDetail = () => {
  const { id } = useParams();
  const feedback = data.productRequests.find((item) => item.id === Number(id));
  console.log(feedback);
  if (!feedback) return <div>Feedback not found</div>;

  return (
    <div>
      <FeedbackNav />
      <section className="my-[6rem] flex flex-col items-center gap-5 bg-[#F7F8FD]">
        <FeedBackCard {...feedback} />
        <FeedBackComments />
        <AddCommentCard />
      </section>
    </div>
  );
};

export default FeedbackDetail;
