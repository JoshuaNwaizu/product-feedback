import { useFeedback } from "@/contexts/FeedbackContext";
import RoadMap from "./RoadMap";
import SortsCard from "./SortsCard";

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useFeedback();

  if (!isSidebarOpen) return null;
  return (
    <>
      <div
        className="fixed left-0 top-0 z-[40] h-full w-full bg-black opacity-50"
        onClick={toggleSidebar}
      ></div>
      <aside className="fixed bottom-0 right-0 top-[5rem] z-[80] flex h-full w-[80%] items-center justify-center bg-[#F7F8FD] p-4 shadow-md">
        <div className="fixed top-[7rem] mx-5 flex flex-col items-center justify-center gap-4">
          <SortsCard />
          <RoadMap />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
