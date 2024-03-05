import { useState } from "react";
import Header from "./components/Header";
import Score from "./Score";
import Player from "./Player";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Modal from "./components/Modal";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("?");
  const [computerChoice, setComputerChoice] = useState("?");
  const [text, setText] = useState("Choose your weapon");
  const [information, setInformation] = useState(
    "First to 5 points wins the game !"
  );

  const options = ["✊", "✋", "✌"];

  const callAction = (e:React.MouseEvent) => {
    const choice = e.target.name
    // const random = Math.floor(Math.random() * options.length);
    const compChoice = options[Math.floor(Math.random() * options.length)];

    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    checkRoundWinner(playerChoice, computerChoice);
  };

  const checkRoundWinner = (player: string, computer: string) => {
    if (player === "✊" && computer === "✊") {
      setText("It's a tie !");
      setInformation("Rock ties with rock");
    } else if (player === "✌" && computer === "✌") {
      setText("It's a tie !");
      setInformation("Scissors ties with scissors");
    } else if (player === "✋" && computer === "✋") {
      setText("It's a tie !");
      setInformation("Paper ties with Paper");
    } else if (player === "✊" && computer === "✋") {
      setComputerScore((prev) => (prev += 1));
      setText("Computer won!");
      setInformation("Paper beats rock");
    } else if (player === "✊" && computer === "✌") {
      setPlayerScore((prev) => (prev += 1));
      setText("You won!");
      setInformation("Rock beats scissors");
    } else if (player === "✋" && computer === "✊") {
      setPlayerScore((prev) => (prev += 1));
      setText("You won!");
      setInformation("Paper beats rock");
    } else if (player === "✋" && computer === "✌") {
      setComputerScore((prev) => (prev += 1));
      setText("Computer won!");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✋") {
      setPlayerScore((prev) => (prev += 1));
      setText("You won");
      setInformation("Scissors beat paper");
    } else if (player === "✌" && computer === "✊") {
      setComputerScore((prev) => (prev += 1));
      setText("Computer won");
      setInformation("Rock beats scissors");
    }
  };

  const startNewGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setText("Choose your weapon");
    setInformation("First to 5 points wins the game !");
  };

  return (
    <>
      {playerScore === 3 && (
        <Modal winner={"Player"} startNewGame={startNewGame} />
      )}
      {computerScore === 3 && (
        <Modal winner={"Computer"} startNewGame={startNewGame} />
      )}
      <Header />
      <Score text={text} information={information} />
      <Wrapper>
        <Player name={"Player"} score={playerScore} choice={playerChoice} />
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
