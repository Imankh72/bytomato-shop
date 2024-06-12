interface Prop {
  value: number;
  color?: string;
}

const ProgressRating = ({ value, color }: Prop) => {
  return (
    <>
      <div className="h-2 w-full rounded-[14px]  bg-[#f0f0f0] relative">
        <div
          className="absolute h-2 rounded-[14px] top-0 right-0 bottom-0 bg-green"
          style={{
            width: `${value}%`,
            background: `${color ? color : "#28a745"}`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </>
  );
};

export default ProgressRating;
