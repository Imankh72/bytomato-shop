import InformationBox from "./InformationBox";

const LegalInformation = () => {
  return (
    <InformationBox
      title="اطلاعات حقوقی"
      btnText="افزودن اطلاعات حقوقی"
      btnUrl="update/legal"
    >
      <div className="text-grayDark">
        با تکمیل اطلاعات حقوقی می‌توانید اقدام به خرید سازمانی نمایید.
      </div>
    </InformationBox>
  );
};

export default LegalInformation;
