import { useState } from "react";
type PlayerProps = {
  name: string;
};

const Player = ({ name }: PlayerProps) => {
  const [score, setScore] = useState(0);
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
