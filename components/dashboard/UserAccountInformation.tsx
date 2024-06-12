const UserAccountInformation = () => {
  return (
    <div className="w-1/2">
      <h2 className="text-[18px] font-bold text-grayDark mb-4">
        اطلاعات حساب کاربری
      </h2>
      <div className="flex flex-col gap-y-6 py-5 px-8 border border-neutral-200 rounded-xl lg:grid lg:grid-cols-2 lg:gap-10">
        {data.map(({ id, title, value }) => (
          <div key={id} className="flex flex-col gap-y-1">
            <span className="text-[13px] text-neutral-400">{title}</span>
            <span className="text-[15px] text-grayDark">{value}</span>
          </div>
        ))}
        <button className="flex items-center justify-center h-8 w-[120px] py-1 px-4 text-[13px] whitespace-nowrap text-blue border border-blue rounded-md">
          ویرایش اطلاعات
        </button>
      </div>
    </div>
  );
};

export default UserAccountInformation;

const data = [
  { id: 1, title: "نام و نام خانوادگی", value: "ایمان خورشیدی" },
  { id: 2, title: "کدملی", value: 6380038213 },
  { id: 3, title: "ایمیل", value: "imankhorshidi72@gmail.com" },
  { id: 4, title: "شماره موبایل", value: "09361419215" },
];
