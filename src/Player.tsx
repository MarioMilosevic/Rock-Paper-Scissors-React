import { useState } from "react";
type PlayerProps = {
  name: string;
  score:number
};

const Player = ({ name, score}: PlayerProps) => {
//   const updateScore = () => {
//     setScore((prev) => prev += result
//     )
//   }

  return (
    <div className="text-center text-gray-50 flex flex-col px-14 pb-10">
      <span className="text-9xl">?</span>
      <span className="text-xl tracking-wide">
        {name}: {score}
      </span>
    </div>
  );
};

export default Player;
