import { BeatLoader, ClipLoader } from "react-spinners";

const CounterLoading = () => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        // color={"#0082fd"}
      />
    </div>
  );
};
export default CounterLoading;
