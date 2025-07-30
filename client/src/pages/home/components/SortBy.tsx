import { Button } from '@/components/ui/button';

const SortBy = () => {
  return (
    <div className="fixed top-[5rem] px-6 bg-[#373F68] left-0 w-full h-[3.5rem]  bg-cover bg-center bg-no-repeat flex justify-center items-center gap-2 z-50">
      <div className="flex justify-between items-center w-full">
        <p className="text-white text-[.8rem] flex items-center gap-1">
          <span className="">Sort by:</span>
          <span className="font-bold">{'Most Upvotes'}</span>
        </p>
        <Button className="bg-[#AD1FEA] text-[.8rem] font-bold h-[2.5rem]">
          + Add Feedback
        </Button>
      </div>
    </div>
  );
};

export default SortBy;
