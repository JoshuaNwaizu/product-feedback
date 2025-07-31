import RoadMap from "./RoadMap";
import SortsCard from "./SortsCard";

const SideBar = () => {
  return (
    <aside className="fixed bottom-0 right-0 top-[5rem] z-[99] flex h-full w-[80%] items-center justify-center bg-[#F7F8FD] p-4 shadow-md">
      <div className="fixed top-[7rem] mx-5 flex flex-col items-center justify-center gap-4">
        <SortsCard />
        <RoadMap />
      </div>
    </aside>
  );
};

export default SideBar;
