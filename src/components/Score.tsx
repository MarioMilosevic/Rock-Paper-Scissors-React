type ScoreProps = {
  text: string;
  information: string;
};

const Score = ({ text, information }: ScoreProps) => {
  return (
    <div className=" text-center py-10 text-gray-50">
      <p className="py-1 text-2xl">{text}</p>
      <p className="py-1 text-xl">{information}</p>
    </div>
  );
};

export default Score;
