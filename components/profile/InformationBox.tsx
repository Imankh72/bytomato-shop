import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  btnText: string;
  btnUrl: string;
}

const InformationBox = ({ children, title, btnText, btnUrl }: Props) => {
  return (
    <div className="p-8 border border-neutral-200 rounded-xl flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:w-[80%]">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center gap-x-3">
          <span className="inline-block w-3 h-3 bg-blue rounded-sm"></span>
          <span className="text-[18px] font-bold">{title}</span>
        </div>
        {children}
      </div>
      <div>
        <Link
          href={`/dashboard/profile/${btnUrl}`}
          className="px-4 flex justify-center items-center h-8 text-blue text-[13px] border border-blue rounded-md whitespace-nowrap w-[162px]"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default InformationBox;
