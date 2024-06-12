import { NextPage } from "next";
import AddNewAddressBox from "../../components/addresses/AddNewAddressBox";
import DashboardPage from "../../components/DashboardPage";

const Addresses: NextPage = () => {
  return (
    <DashboardPage>
      <div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[18px] font-bold text-grayDark">آدرس ها</h2>
          <AddNewAddressBox />
        </div>
      </div>
    </DashboardPage>
  );
};

export default Addresses;
