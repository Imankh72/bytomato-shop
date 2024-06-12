import { StarIcon } from "../../svgs/StarIcon";

const StarsBox = () => {
  return (
    <div className="flex items-center gap-x-1">
      <span>
        <StarIcon className="w-4 h-4 fill-warning stroke-warning" />
      </span>
      <span>
        <StarIcon className="w-4 h-4 fill-warning stroke-warning" />
      </span>
      <span>
        <StarIcon className="w-4 h-4 fill-warning stroke-warning" />
      </span>
      <span>
        <StarIcon className="w-4 h-4 fill-warning stroke-warning" />
      </span>
      <span>
        <StarIcon className="w-4 h-4 fill-warning stroke-warning" />
      </span>
    </div>
  );
};

export default StarsBox;
