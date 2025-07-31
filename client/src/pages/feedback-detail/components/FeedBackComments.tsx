type Reply = {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
};

type Comment = {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
};

const FeedBackComments = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className="w-full flex items-center max-w-md">
      <div className="flex mx-[1.5rem]  w-full flex-col gap-5 rounded-[0.625rem] bg-white px-6 py-5">
        <h1 className="text-[1.125rem] font-bold text-[#3A4374]">
          {comments.length} {comments?.length === 1 ? 'comment' : 'comments'}
        </h1>
        <div className="flex flex-col  gap-5">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4">
                <div className="item-center flex justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={comment.user.image.replace('./assets', '')}
                      alt={comment.user.name}
                      className="h-[2.5rem] w-[2.5rem] rounded-full"
                    />
                    <p className="flex flex-col">
                      <span className="text-[.8125rem] font-bold text-[#3A4374]">
                        {comment.user.name}
                      </span>
                      <span className="text-[.8125rem] text-gray-500">
                        @{comment.user.username}
                      </span>
                    </p>
                  </div>
                  <p className="text-[.8125rem] font-semibold text-[#4661E6]">
                    Reply
                  </p>
                </div>
                <p className="text-[.8125rem] text-[#647196]">
                  {comment.content}
                </p>
              </div>
              {/* Render replies if any */}
              <div className=" flex flex-col gap-5">
                {comment.replies && comment.replies.length > 0 && (
                  <div className="flex justify-between mt-4 ">
                    <div className="h-[13.5rem] w-[0.0625rem] bg-[#647196]"></div>
                    <div>
                      <div className=" w-full pl-[2rem] flex flex-col gap-6">
                        {comment.replies.map((reply, idx) => (
                          <div
                            key={idx}
                            className="flex bggre flex-col gap-4"
                          >
                            <div className="item-center flex justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={reply.user.image.replace('./assets', '')}
                                  alt={reply.user.name}
                                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                                />
                                <p className="flex flex-col">
                                  <span className="text-[.8125rem] font-bold text-[#3A4374]">
                                    {reply.user.name}
                                  </span>
                                  <span className="text-[.8125rem] text-gray-500">
                                    @{reply.user.username}
                                  </span>
                                </p>
                              </div>
                              <p className="text-[.8125rem] font-semibold text-[#4661E6]">
                                Reply
                              </p>
                            </div>
                            <p className="text-[.8125rem] text-[#647196]">
                              <span className="font-bold text-[#AD1FEA]">
                                @{reply.replyingTo + ' '}
                              </span>
                              {reply.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <hr />
              </div>{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBackComments;
