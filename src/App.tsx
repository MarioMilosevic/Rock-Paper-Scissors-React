import { useState } from "react";
import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
import Wrapper from "./assets/components/Wrapper";
const App = () => {
  const options = ["✊", "✋", "✌"];

  const chooseFunction = (e) => {
    const playerChoice = e.target.textContent;
    // treba da uzme rezultat,
    const random = Math.floor(Math.random() * options.length);
    // da pozove random rezultat iz arraja
    const computerChoice = options[random];
    console.log(playerChoice, computerChoice)

    checkResult(playerChoice, computerChoice);
    // da uporedi oba rezultata
    // ako ima pobjednika da dodijeli pravom poen
  };

  const checkResult = (player, computer) => {
    if (player === computer) {
      console.log("nerijeseno");
    } else if (player === "✊" && computer === "✋") {
      console.log("Komjuter dobio");
    } else if (player === "✊" && computer === "✌") {
      console.log("Plejer dobio");
    } else if (player === "✋" && computer === "✊") {
      console.log("plejer dobio");
    } else if (player === "✋" && computer === "✌") {
      console.log("Kompjuter dobio");
    } else if (player === "✌" && computer === "✋") {
      console.log("Plejer dobio");
    } else if (player === "✌" && computer === "✊") {
      console.log("kompjuter dobio");
    }
  };

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
