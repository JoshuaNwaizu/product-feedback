import CreateNewFeedbackNav from "./components/CreateNewFeedbackNav";
import CreateFeedback from "./components/CreateFeedback";

const CreateNewFeedback = () => {
  return (
    <div className="my-[6rem] flex flex-col items-center gap-5 bg-[#F7F8FD]">
      <CreateNewFeedbackNav />
      <CreateFeedback />
    </div>
  );
};

export default CreateNewFeedback;
