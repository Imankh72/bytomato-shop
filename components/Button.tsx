interface Props {
  text: string;
  className?: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <button
      type="submit"
      className={`px-4 flex justify-center items-center text-[14px] text-white bg-blue h-12 rounded-md whitespace-nowrap ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
