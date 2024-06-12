import { NextPage } from "next";
import UpdateInformationBox from "../../../../components/update/UpdateInformationBox";
import UpdatePersonalInformation from "../../../../components/update/UpdatePersonalInformation";

const Update: NextPage = () => {
  return (
    <UpdateInformationBox title="ویرایش اﻃﻠﺎﻋﺎت شخصی">
      <UpdatePersonalInformation />
    </UpdateInformationBox>
  );
};

export default Update;
