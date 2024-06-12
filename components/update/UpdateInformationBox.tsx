import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import DashboardPage from "../DashboardPage";

interface Props {
  title: string;
  children: ReactNode;
}

const UpdateInformationBox = ({ title, children }: Props) => {
  return (
    <DashboardPage>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2 text-[18px] font-bold">
          <Link href="/dashboard/profile">
            <AiOutlineArrowRight />
          </Link>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </DashboardPage>
  );
};

export default UpdateInformationBox;
