import { CommentIcon } from "../svgs/CommentIcon";
import { StarIcon } from "../svgs/StarIcon";

const ProductRating = () => {
  return (
    <div className="flex items-center gap-x-5 text-[12px] text-secondary border-b border-neutral-200 pb-3 mb-4">
      <div className="flex items-center gap-x-2 pl-3 border-l border-neutral-200">
        <span className="flex items-center gap-x-1 rounded-md bg-secondary text-light px-1">
          <StarIcon className="w-4 h-4" />
          <span className="mt-[3px]">4.8</span>
        </span>
        <span>از 28 رای</span>
      </div>
      <div className="flex items-center gap-x-2">
        <CommentIcon className="w-6 h-6" />
        <span>(28 نظر)</span>
      </div>
    </div>
  );
};

export default ProductRating;
