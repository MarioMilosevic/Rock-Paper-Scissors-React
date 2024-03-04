import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
import Wrapper from "./assets/components/Wrapper";
const App = () => {
  return (
    <>
      <Header />
      <Score />
      <Wrapper>
        <Player />
        <Player />
      </Wrapper>
      <Wrapper>
        <Button />
        <Button />
        <Button />
      </Wrapper>
    </>
  );
};

export default App;
