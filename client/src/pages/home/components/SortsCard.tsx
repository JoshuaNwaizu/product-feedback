const sorts: string[] = ["all", "UI", "UX", "enhancement", "bug", "feature"];
const SortsCard = () => {
  return (
    <div className="flex h-[11rem] w-full max-w-md items-center justify-center rounded-lg bg-white p-4">
      <ul className="flex flex-wrap gap-2">
        {sorts.map((sort) => (
          <li
            key={sort}
            className="inline-flex items-center whitespace-nowrap rounded-[.6rem] bg-[#F2F4FF] px-5 py-2.5 text-[0.8125rem] font-bold capitalize text-[#4661E6]"
          >
            {sort}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortsCard;
