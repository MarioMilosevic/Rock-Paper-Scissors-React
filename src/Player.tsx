import { useState } from "react";
type PlayerProps = {
  name: string;
  score:number,
  choice:string
};

const Player = ({ name, score, choice}: PlayerProps) => {
  return (
    <div className="text-center text-gray-50 flex flex-col px-14 pb-10">
      <span className="text-8xl pb-2  w-[120px]">{choice}</span>
      <span className="text-xl tracking-wide pt-2">
        {name}: {score}
      </span>
    </div>
  );
};

export default Player;
