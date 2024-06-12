import { ClipLoader } from "react-spinners";

const ButtonLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader
        size={25}
        color={"#fff"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default ButtonLoading;
