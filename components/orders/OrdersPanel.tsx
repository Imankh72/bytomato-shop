import OrdersContent from "./OrdersContent";

const OrdersPanel = () => {
  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden">
      <div className="grid grid-cols-[repeat(6,auto)] gap-x-10 bg-neutral-100 p-3 rounded-sm w-full mb-1">
        {data.map(({ id, title }) => (
          <span
            key={id}
            className="text-[13px] text-neutral-400 justify-self-center whitespace-nowrap"
          >
            {title}
          </span>
        ))}
      </div>
      <div className="h-[1px] bg-neutral-400 rounded-md"></div>
      <OrdersContent />
    </div>
  );
};

export default OrdersPanel;

const data = [
  { id: 1, title: "#" },
  { id: 2, title: "شماره سفارش" },
  { id: 3, title: "تاریخ ثبت سفارش" },
  { id: 4, title: "وضعیت سفارش" },
  { id: 5, title: "مبلغ قابل پرداخت" },
  { id: 6, title: "وضعیت پرداخت" },
];
