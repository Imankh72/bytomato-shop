import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchItem,
  setFilter,
  setSearchItem,
} from "../../../redux/slices/products";
import { AppDispatch } from "../../../redux/store";
import { CloseIcon } from "../../svgs/CloseIcon";

const Filter = () => {
  const searchItem = useSelector(selectSearchItem);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {searchItem && (
        <div className="px-2 py-3 bg-[#b3b3b3] text-white rounded-lg inline-block">
          <span className="pl-5">{searchItem}</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              dispatch(setSearchItem(""));
              dispatch(setFilter(""));
            }}
          >
            <CloseIcon className="w-5 h-5 inline-block" />
          </span>
        </div>
      )}
    </>
  );
};
export default Filter;
