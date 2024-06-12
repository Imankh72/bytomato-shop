import InformationBox from "./InformationBox";

const PersonalInformation = () => {
  return (
    <InformationBox
      title="اطلاعات شخصی"
      btnText="ویرایش اطلاعات شخصی"
      btnUrl="update"
    >
      <div className="flex flex-col gap-y-10 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:pt-4 lg:pr-4">
        {data.map(({ id, title, value }) => (
          <div key={id} className="flex flex-col gap-y-1">
            <span className="text-[13px] text-secondary">{title}</span>
            <span className="text-grayDark">{value}</span>
          </div>
        ))}
      </div>
    </InformationBox>
  );
};

export default PersonalInformation;

const data = [
  { id: 1, title: "نام", value: "ایمان" },
  { id: 2, title: "نام خانوادگی", value: "خورشیدی" },
  { id: 3, title: "جنسیت", value: "مرد" },
  { id: 4, title: "تاریخ تولد", value: "12/7/1372" },
  { id: 5, title: "شماره موبایل", value: "09361419215" },
  { id: 6, title: "ایمیل", value: "imankhorshidi72@gmail.com" },
  { id: 7, title: "کد ملی", value: "6380038213" },
  { id: 8, title: "شماره کارت", value: "" },
];
