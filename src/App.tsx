import { useState } from "react";
import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
import Wrapper from "./assets/components/Wrapper";
const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const options = ["✊", "✋", "✌"];
  const callAction = (e) => {
    const point = 1;
    const playerChoice = e.target.textContent;
    // treba da uzme rezultat,
    const random = Math.floor(Math.random() * options.length);
    // da pozove random rezultat iz arraja
    const computerChoice = options[random];
    console.log(playerChoice, computerChoice);

    checkResult(playerChoice, computerChoice);
    // da uporedi oba rezultata
    // ako ima pobjednika da dodijeli pravom poen
  };

  const checkResult = (player, computer) => {
    if (player === computer) {
      console.log("nerijeseno");
    } else if (player === "✊" && computer === "✋") {
      console.log("Komjuter dobio");
      setComputerScore((prev) => (prev += 1));
    } else if (player === "✊" && computer === "✌") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => (prev += 1));
    } else if (player === "✋" && computer === "✊") {
      console.log("plejer dobio");
      setPlayerScore((prev) => (prev += 1));
    } else if (player === "✋" && computer === "✌") {
      console.log("Kompjuter dobio");
      setComputerScore((prev) => (prev += 1));
    } else if (player === "✌" && computer === "✋") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => (prev += 1));
    } else if (player === "✌" && computer === "✊") {
      console.log("kompjuter dobio");
      setComputerScore((prev) => (prev += 1));
    }
  };

  const roundWinner = (player) => {};

  return (
    <>
      <Header />
      <Score />
      <Wrapper>
        <Player name={"Player"} score={playerScore} />
        <Player name={"Computer"} score={computerScore} />
      </Wrapper>
      <Wrapper>
        {options.map((option, index) => (
          <Button key={index} option={option} clickHandler={callAction} />
        ))}
      </Wrapper>
    </>
  );
};

export default App;
