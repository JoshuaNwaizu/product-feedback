const CreateNewFeedbackNav = () => {
  return (
    <div>
      {" "}
      <div className="fixed left-0 top-0 z-50 flex h-[3.5rem] w-full items-center justify-center gap-2 bg-[#F7F8FD] bg-cover bg-center bg-no-repeat px-6">
        <div className="flex w-[20.5rem] items-center justify-between">
          <p
            //   onClick={handleGoBack}
            className="#647196 flex items-center gap-2 text-[.8rem]"
          >
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L2 5l4-4"
                stroke="#4661E6"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            <span className="font-bold">Go Back</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNewFeedbackNav;
