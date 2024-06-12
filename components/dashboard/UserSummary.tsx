import Image from "next/image";
import { LeftArrowSlider } from "../svgs/LeftArrowSlider";

const UserSummary = () => {
  return (
    <div className="p-4 border border-neutral-200 rounded-xl">
      <div className="flex items-center gap-x-3 mb-4">
        <div>
          <Image
            src="/images/user-avatar.svg"
            width={34}
            height={38}
            alt="user avatar"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-[14px] text-grayDark">ایمان خورشیدی</span>
          <span className="text-[13px] text-neutral-400">09361419215</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 rounded-md text-lightGreen bg-[#e9f8ef] border border-[#bee7cf]">
        <span className="text-[14px]">کیف پول:</span>
        <div className="flex items-center gap-x-2">
          <span className="text-[14px]">0</span>
          <span className="text-[12px]">تومان</span>
          <div>
            <LeftArrowSlider className="w-3 h-3 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSummary;
