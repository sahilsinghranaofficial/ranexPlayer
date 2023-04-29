import HomeSection from './HomeSection';
import UserGreeting from './UserGreeting';

import Card from '../../components/Card';
import HorizontalList from '../../components/List/HorizontalList';
import PlayerBar from '../../components/Player/PlayerBar';

const Home = () => {
  return (
    <div className="h-screen pb-36 w-full">
      <div className="overflow-auto h-full max-h-full pb-10">
        <UserGreeting />
        <HomeSection title="Playlists">
          <HorizontalList>
            <li>
              <Card>Playlist Card</Card>
            </li>
            <li>
              <Card>Playlist Card2</Card>
            </li>
            <li>
              <Card>Playlist Card3</Card>
            </li>
          </HorizontalList>
        </HomeSection>
      </div>
      <PlayerBar />
    </div>
  );
};

Home.displayName = 'Home';

export default Home;