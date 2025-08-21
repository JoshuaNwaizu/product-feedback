import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const SortBy = () => {
  return (
    <div className="fixed left-0 top-[5rem] z-50 flex h-[3.5rem] w-full items-center justify-center gap-2 bg-[#373F68] bg-cover bg-center bg-no-repeat px-6">
      <div className="flex w-full items-center justify-between">
        <p className="flex items-center gap-1 text-[.8rem] text-white">
          <span className="">Sort by:</span>
          <span className="flex items-center gap-1 font-bold">
            {"Most Upvotes"}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
            >
              <path d="M1 6L5 2L9 6" stroke="white" stroke-width="2" />
            </svg>
          </span>
        </p>
        <Link to="/create-feedback">
          <Button className="h-[2.5rem] bg-[#AD1FEA] text-[.8rem] font-bold">
            + Add Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SortBy;
