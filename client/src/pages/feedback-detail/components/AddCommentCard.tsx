import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddCommentCard = () => {
  return (
    <div className="mx-auto mt-6 w-[20.435rem] rounded-lg bg-white px-4 py-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.01563rem] text-[#3A4374]">
          Add Comments
        </h1>
        <Textarea
          placeholder="Type your comment here"
          className="h-[5rem] bg-[#F7F8FD]"
        />
        <p className="flex items-center justify-between">
          <span className="text-[0.8125rem] text-[#647196]">
            250 characters left
          </span>
          <Button className="bg-[#AD1FEA] font-bold text-[#fff]">
            Post Comment
          </Button>
        </p>
      </div>
    </div>
  );
};

export default AddCommentCard;
