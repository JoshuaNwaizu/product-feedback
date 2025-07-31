import Feedbacks from './components/Feedbacks';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import SortBy from './components/SortBy';

const Home = () => {
  return (
    <div>
      <Nav />
      <SortBy />
      <Feedbacks />
      <SideBar />
    </div>
  );
};

export default Home;
