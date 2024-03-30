type ButtonProps = {
  option: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ option, clickHandler }: ButtonProps) => {
  return (
    <button
      className="w-[150px] rounded-lg  text-center mx-4 text-6xl p-8 bg-gray-700 hover:bg-gray-600"
      onClick={clickHandler}
      name={option}
    >
      {option}
    </button>
  );
};

export default Button;
