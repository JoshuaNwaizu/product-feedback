import { useFeedback } from "@/contexts/FeedbackContext";

const Nav = () => {
  const { isSidebarOpen, toggleSidebar } = useFeedback(); // Assuming your context provides isSidebarOpen

  return (
    <nav
      className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-cover bg-center bg-no-repeat px-6"
      style={{
        background:
          "radial-gradient(166.82% 166.82% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
      }}
    >
      <div className="text-white">
        <p className="text-[.9rem] font-bold">Frontend Mentor</p>
        <p className="text-[0.8125rem]">Feedback Board</p>
      </div>

      <button onClick={toggleSidebar} className="p-2">
        {isSidebarOpen ? (
          // Close (X) icon
          <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          // Hamburger menu icon
          <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
            </g>
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Nav;
