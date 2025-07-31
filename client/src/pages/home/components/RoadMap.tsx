const RoadMap = () => {
  return (
    <div className="h-[11rem] w-full max-w-md flex-col rounded-lg bg-white p-4">
      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.125rem] font-bold tracking-[-0.01563rem] text-[#3A4374]">
            RoadMap
          </h2>
          <p className="text-sm font-semibold text-[#4661E6] underline decoration-solid decoration-from-font">
            View
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="t flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#F49F85" />
              </svg>
              <h3 className="text-[1rem] text-[#647196]">Planned</h3>
            </div>
            <span className="text-[1rem] text-[#647196]">2</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
