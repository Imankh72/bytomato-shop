import { ReactNode } from "react";
import Page from "./Page";
import UserSummary from "./dashboard/UserSummary";
import Panel from "./dashboard/Panel";

interface Props {
  children: ReactNode;
}

const DashboardPage = ({ children }: Props) => {
  return (
    <Page>
      <div className="p-4 flex flex-col gap-y-10 lg:flex-row lg:gap-x-5 lg:py-10">
        <div className="flex flex-col gap-y-10 lg:gap-y-14 lg:w-[30%]">
          <UserSummary />
          <Panel />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </Page>
  );
};

export default DashboardPage;
