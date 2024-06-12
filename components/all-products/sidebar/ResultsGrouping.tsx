import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/slices/categories";
import { setFilter } from "../../../redux/slices/products";
import { AppDispatch } from "../../../redux/store";
import { LeftArrowSlider } from "../../svgs/LeftArrowSlider";

interface ResultsGroupingProps {
  showAllCategories: boolean;
}

const ResultsGrouping: FC<ResultsGroupingProps> = ({ showAllCategories }) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);

  return (
    <div>
      <h2 className="mb-4">دسته‌بندی نتایج</h2>
      <ul>
        <li>
          <button className="flex items-center gap-x-2 results-grouping__link pr-0 mb-1">
            <LeftArrowSlider className="w-2 h-2 stroke-secondary -rotate-90" />
            دیجیتال
          </button>
        </li>
      </ul>
      {!showAllCategories && (
        <>
          {categories.slice(0, 8).map(({ id, title }) => (
            <ul key={id} className="mb-1 last:mb-0">
              <li onClick={() => dispatch(setFilter(id))}>
                <button className="results-grouping__link pr-4">{title}</button>
              </li>
            </ul>
          ))}
        </>
      )}
      {showAllCategories && (
        <>
          {categories.map(({ id, title }) => (
            <ul key={id} className="mb-1 last:mb-0">
              <li onClick={() => dispatch(setFilter(id))}>
                <button className="results-grouping__link pr-4">{title}</button>
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default ResultsGrouping;
