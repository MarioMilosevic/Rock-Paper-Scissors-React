import { useState, useEffect } from "react";
import Header from "./components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Modal from "./components/Modal";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [choice, setChoice] = useState("?");
  const [computerChoice, setComputerChoice] = useState("?");
  const [text, setText] = useState("Choose your weapon");
  const [information, setInformation] = useState(
    "First to 5 points wins the game !"
  );
  const options = ["✊", "✋", "✌"];
  let modalPosition = "-inset-full";
  useEffect(() => {
    checkForWinner(playerScore, computerScore);
    console.log("pozvano");
  }, [playerScore, computerScore]);

  const callAction = (e) => {
    const playerChoice = e.target.textContent;
    const random = Math.floor(Math.random() * options.length);
    const computerChoice = options[random];
    setChoice(playerChoice);
    setComputerChoice(computerChoice);
    console.log(playerChoice, computerChoice);
    console.log(playerScore, computerScore);
    checkRoundWinner(playerChoice, computerChoice);
  };

  const checkRoundWinner = (player, computer) => {
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
      setComputerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });

      setText("Computer won!");
      setInformation("Paper beats rock");
    } else if (player === "✊" && computer === "✌") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });

      setText("You won!");
      setInformation("Rock beats scissors");
    } else if (player === "✋" && computer === "✊") {
      console.log("plejer dobio");
      setPlayerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });

      setText("You won!");
      setInformation("Paper beats rock");
    } else if (player === "✋" && computer === "✌") {
      console.log("Kompjuter dobio");
      setComputerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });

      setText("Computer won!");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✋") {
      console.log("Plejer dobio");
      setPlayerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });

      setText("You won");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✊") {
      console.log("kompjuter dobio");
      setComputerScore((prev) => {
        prev += 1;
        // checkForWinner(playerScore, computerScore);
        return prev;
      });
      setText("Computer won");
      setInformation("Rock beats scissors");
    }
  };

  const checkForWinner = (a, b) => {
    if (a === 3) {
      return console.log("A won");
    } else if (b === 3) {
      return console.log("B won");
    }
  };

  // napravim 3 objekta u array name:"scissors", emoji:taj emoji, id:random

  return (
    <>
      {playerScore === 3 && <Modal  winner={"Player"}/>}
      {computerScore === 3 && <Modal  winner={"Computer"} />}
      <Header />
      <Score text={text} information={information} />
      <Wrapper>
        <Player name={"Player"} score={playerScore} choice={choice} />
        <Player
          name={"Computer"}
          score={computerScore}
          choice={computerChoice}
        />
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
