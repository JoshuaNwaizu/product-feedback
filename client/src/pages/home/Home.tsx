import Feedbacks from './components/Feedbacks';
import Nav from './components/Nav';
import SortBy from './components/SortBy';

const Home = () => {
  return (
    <div>
      <Nav />
      <SortBy />
      <Feedbacks />
    </div>
  );
};

export default Home;
