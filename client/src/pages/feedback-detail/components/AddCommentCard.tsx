import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addComment } from "@/slice/feedbackSlice";
import type { RootState } from "@/store";

const AddCommentCard = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const maxLength = 250;

  const handlePostComment = () => {
    if (content.trim() && user) {
      // NOTE: Ensure the user object from your auth slice has image, name, and username fields.
      dispatch(
        addComment({
          content,
          user: {
            image: user.image,
            name: user.name,
            username: user.username,
          },
        }),
      );
      setContent("");
    }
  };

  const charactersLeft = maxLength - content.length;

  return (
    <div className="flex w-full max-w-md items-center">
      <div className="mx-[1.5rem] mt-6 w-full rounded-[0.625rem] bg-white px-4 py-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-[1.125rem] font-bold tracking-[-0.01563rem] text-[#3A4374]">
            Add Comment
          </h1>
          <Textarea
            placeholder="Type your comment here"
            className="h-[5rem] bg-[#F7F8FD]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={maxLength}
          />
          <p className="flex items-center justify-between">
            <span className="text-[0.8125rem] text-[#647196]">
              {charactersLeft} Characters Left
            </span>
            <Button
              className="bg-[#AD1FEA] font-bold text-[#fff] hover:bg-[#AD1FEA]/90"
              onClick={handlePostComment}
              disabled={!content.trim() || !user}
            >
              Post Comment
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCommentCard;
