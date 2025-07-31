import { Link } from 'react-router';

type FeedBackCardProps = {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  upvotes?: number;
  comments?: { id: number; content: string }[];
};

const FeedBackCard = ({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
}: FeedBackCardProps) => {
  return (
    <Link
      to={`/feedback-detail/${id}`}
      className="w-full flex items-center max-w-md"
    >
      <section className="mx-[1.5rem] flex h-[12rem]  w-full  flex-col rounded-[.6rem] bg-[#fff]">
        <div className="flex flex-col gap-2.5 px-6 py-5">
          <h2 className="font-bold leading-normal tracking-[-0.01131rem] text-[#3A4374]">
            {title}
          </h2>

          <p className="text-[.8rem] text-[#64719]">{description}</p>
          <div className="flex text-[.8rem] font-bold text-[#4661E6]">
            <p className="flex h-[1.8rem] items-center rounded-[.6rem] bg-[#F2F4FF] px-[1.5rem]">
              {category}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex h-[2rem] w-[4.3rem] items-center justify-center gap-1 rounded-[.6rem] bg-[#F2F4FF]">
              <svg
                width="10"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#4661E6"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>

              <span className="text-[.8rem] font-bold text-[#3A4374]">
                {upvotes}
              </span>
            </p>

            <p className="flex h-[2rem] w-[4.3rem] items-center justify-center gap-1 rounded-[.6rem] text-[#3A4374]">
              <svg
                width="18"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                  fill="#CDD2EE"
                  fill-rule="nonzero"
                />
              </svg>
              <span className="text-[.8rem] font-bold">
                <span className="text-[.8rem] font-bold text-[#3A4374]">
                  {comments?.length || 0}
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default FeedBackCard;
