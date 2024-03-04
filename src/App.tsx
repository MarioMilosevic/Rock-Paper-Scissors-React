import { useState } from "react";
import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
import Wrapper from "./assets/components/Wrapper";
const App = () => {
  const chooseFunction = (e) => {
    console.dir(e.target.textContent);
    const choice = e.target.textContent;
    return choice;
  };

  const options = ["✊", "✋", "✌"];

  return (
    <>
      <Header />
      <Score />
      <Wrapper>
        <Player name={"Player"} />
        <Player name={"Computer"} />
      </Wrapper>
      <Wrapper>
        {options.map((option, index) => (
          <Button key={index} option={option} clickHandler={chooseFunction} />
        ))}
      </Wrapper>
    </>
  );
};

export default App;
