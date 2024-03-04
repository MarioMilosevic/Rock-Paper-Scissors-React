import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
const App = () => {
  return (
    <>
      <Header />
      <Score />
      <div className="flex justify-center">
        <Player />
        <Player />
      </div>
      <div className="flex justify-center">
      <Button />
      <Button />
      <Button />
      </div>
    </>
  );
};

export default App;
