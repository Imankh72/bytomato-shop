import ProgressRating from "./ProgressRating";

const ProgressBox = () => {
  return (
    <div className="text-[14px] text-secondary flex flex-col gap-y-4">
      {data.map(({ id, value, startValue, color }) => (
        <div key={id} className="progress__rating">
          <span className="whitespace-nowrap">{startValue} ستاره</span>
          <ProgressRating value={value} color={color} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBox;

const data = [
  { id: 1, value: 92, startValue: 5 },
  { id: 2, value: 4, startValue: 4 },
  { id: 3, value: 0, startValue: 3 },
  { id: 4, value: 0, startValue: 2 },
  { id: 5, value: 4, startValue: 1, color: "#dc3545" },
];
