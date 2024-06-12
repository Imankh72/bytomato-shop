import { FC } from "react";
import { LeftArrowSlider } from "./svgs/LeftArrowSlider";

interface ViewAllBtnProps {
  clickHandler?: (status: boolean) => void;
}

const ViewAllBtn: FC<ViewAllBtnProps> = ({ clickHandler }) => {
  return (
    <button className="view-all__btn" onClick={() => clickHandler(true)}>
      مشاهده همه <LeftArrowSlider className="w-2 h-2 -rotate-90" />
    </button>
  );
};

export default ViewAllBtn;
