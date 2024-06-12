import Accordion from "../Accordion";

const FooterLinks = () => {
  return (
    <div className="px-4 pt-8 lg:justify-between">
      <Accordion data={data1} />
    </div>
  );
};

export default FooterLinks;

const data1 = [
  {
    id: 1,
    title: "دفترچه خریداران",
    links: [
      { id: 1, link: "ثبت سفارش" },
      { id: 2, link: "روش های پرداخت" },
      { id: 3, link: "شرایط ارسال" },
      { id: 4, link: "پیگیری سفارش" },
      { id: 5, link: "ضمانت و بازگشت کالا" },
    ],
  },
  {
    id: 2,
    title: "دفترچه فروشندگان",
    links: [
      { id: 1, link: "راهنمای فروشندگان" },
      { id: 2, link: "میخواهم فروشنده شوم" },
      { id: 3, link: "قوانین و مقررات فروش در تیمچه" },
    ],
  },
  {
    id: 3,
    title: "دانستنی‌ها",
    links: [
      { id: 1, link: "حریم شخصی شما" },
      { id: 2, link: "قوانین و مقررات ما" },
      { id: 3, link: "فرصت های شغلی" },
    ],
  },
  {
    id: 4,
    title: "تیمچه!",
    links: [
      { id: 1, link: "درباره تیمچه" },
      { id: 2, link: "ارتباط با تیمچه" },
      { id: 3, link: "مزیت‌های تیمچه" },
      { id: 4, link: "داستان تیمچه" },
    ],
  },
];
