import { PropagateLoader } from "react-spinners";

interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <PropagateLoader
        loading={loading}
        color={"#0082fd"}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
