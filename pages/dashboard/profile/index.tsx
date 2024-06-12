import { NextPage } from "next";
import DashboardPage from "../../../components/DashboardPage";
import LegalInformation from "../../../components/profile/LegalInformation";
import PersonalInformation from "../../../components/profile/PersonalInformation";

const Profile: NextPage = () => {
  return (
    <DashboardPage>
      <div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[18px] font-bold text-grayDark">
            اطلاعات حساب کاربری
          </h2>
          <div className="flex flex-col gap-y-5">
            <PersonalInformation />
            <LegalInformation />
          </div>
        </div>
      </div>
    </DashboardPage>
  );
};

export default Profile;
