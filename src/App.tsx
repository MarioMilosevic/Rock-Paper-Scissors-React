import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
const App = () => {
  return (
    <>
      <Header />
      <Score/>
      <div className="flex justify-center">
      <Player/>
      <Player/>
      </div>
    </>
  );
};

export default App;
