import Banner from './Banner';
import Content from './Content';
import Pay from './Pay';
import { DivHomePage } from './styles';

function HomePage() {
  return (
    <DivHomePage>
      <Banner />
      <Content title="Top in 2023" />
      <Content title="Movies" />
      <Content title="Series" />
      <Pay />
    </DivHomePage>
  );
}

export default HomePage;
