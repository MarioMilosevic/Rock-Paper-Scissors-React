import { useState } from "react";
import Header from "./assets/components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./assets/components/Button";
import Wrapper from "./assets/components/Wrapper";
const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [choice,setChoice] = useState("?")
  const [computerChoice,setComputerChoice] = useState("?")

  const [text, setText] = useState("Choose your weapon");
  const [information, setInformation] = useState(
    "First to 5 points wins the game !"
  );

  const options = ["✊", "✋", "✌"];

  const callAction = (e) => {
    const playerChoice = e.target.textContent;
    const random = Math.floor(Math.random() * options.length);
    const computerChoice = options[random];
    setChoice(playerChoice)
    setComputerChoice(computerChoice)
    console.log(playerChoice, computerChoice);
    checkResult(playerChoice, computerChoice);
  };

  const checkResult = (player, computer) => {
    if (player === "✊" && computer === "✊") {
      console.log("nerijeseno");
      setText("It's a tie !");
      setInformation("Rock ties with rock");
    } else if (player === "✌" && computer === "✌") {
      console.log("nerijeseno");
      setText("It's a tie !");
      setInformation("Scissors ties with scissors");
    } else if (player === "✋" && computer === "✋") {
      console.log("nerijeseno");
      setText("It's a tie !");
      setInformation("Paper ties with Paper");
    } else if (player === "✊" && computer === "✋") {
      console.log("Komjuter dobio");
      setComputerScore((prev) => (prev += 1));
      setText("Computer won!");
      setInformation("Paper beats rock");
    } else if (player === "✊" && computer === "✌") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => (prev += 1));
      setText("You won!");
      setInformation("Rock beats scissors");
    } else if (player === "✋" && computer === "✊") {
      console.log("plejer dobio");
      setPlayerScore((prev) => (prev += 1));
      setText("You won!");
      setInformation("Paper beats rock");
    } else if (player === "✋" && computer === "✌") {
      console.log("Kompjuter dobio");
      setComputerScore((prev) => (prev += 1));
      setText("Computer won!");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✋") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => (prev += 1));
      setText("You won");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✊") {
      console.log("kompjuter dobio");
      setComputerScore((prev) => (prev += 1));
      setText("Computer won");
      setInformation("Rock beats scissors");
    }
  };

  // napravim 3 objekta u array name:"scissors", emoji:taj emoji, id:random

  const roundWinner = (player) => {};

  return (
    <>
      <Header />
      <Score text={text} information={information} />
      <Wrapper>
        <Player name={"Player"} score={playerScore} choice={choice}/>
        <Player name={"Computer"} score={computerScore} choice={computerChoice}/>
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
