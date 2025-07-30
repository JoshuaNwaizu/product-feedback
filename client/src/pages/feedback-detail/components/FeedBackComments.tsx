const FeedBackComments = () => {
  return (
    <div className="flex w-[20.4375rem] flex-col gap-8 bg-white px-4 py-5">
      <h1 className="text-[1.125rem] font-bold text-[#3A4374]">4 Comments</h1>
      <div className="flex flex-col gap-4">
        <div className="item-center flex justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/user-images/image-elijah.jpg"
              alt="image"
              className="h-[2.5rem] w-[2.5rem] rounded-full"
            />
            <p className="flex flex-col">
              <span className="text-[.8125rem] font-bold text-[#3A4374]">
                James Skinner
              </span>
              <span className="text-[.8125rem] text-gray-500">
                @hummingbird1
              </span>
            </p>
          </div>
          <p className="text-[.8125rem] font-semibold text-[#4661E6]">Reply</p>
        </div>
        <p className="text-[.8125rem] text-[#647196]">
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>
      </div>

      <hr />
      {/* comments with replies */}
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex flex-col gap-4">
            <div className="item-center flex justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/user-images/image-james.jpg"
                  alt="image"
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                />
                <p className="flex flex-col">
                  <span className="text-[.8125rem] font-bold text-[#3A4374]">
                    Elijah Moss
                  </span>
                  <span className="text-[.8125rem] text-gray-500">
                    @hexagon.bestagon
                  </span>
                </p>
              </div>
              <p className="text-[.8125rem] font-semibold text-[#4661E6]">
                Reply
              </p>
            </div>
            <p className="text-[.8125rem] text-[#647196]">
              Second this! I do a lot of late night coding and reading. Adding a
              dark theme can be great for preventing eye strain and the
              headaches that result. It’s also quite a trend with modern apps
              and apparently saves battery life.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="h-[13.5rem] w-[0.0625rem] bg-[#647196]"></div>
          <div>
            <div className="flex w-[16rem] flex-col gap-4">
              <div className="item-center flex justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/user-images/image-anne.jpg"
                    alt="image"
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                  />
                  <p className="flex flex-col">
                    <span className="text-[.8125rem] font-bold text-[#3A4374]">
                      Anne Valentine
                    </span>
                    <span className="text-[.8125rem] text-gray-500">
                      @annev1990
                    </span>
                  </p>
                </div>
                <p className="text-[.8125rem] font-semibold text-[#4661E6]">
                  Reply
                </p>
              </div>
              <p className="text-[.8125rem] text-[#647196]">
                <span className="font-bold text-[#AD1FEA]">@hummingbird1 </span>
                While waiting for dark mode, there are browser extensions that
                will also do the job. Search for "dark theme” followed by your
                browser. There might be a need to turn off the extension for
                sites with naturally black backgrounds though.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackComments;
