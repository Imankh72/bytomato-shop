import { NextPage } from "next";
import DashboardPage from "../../components/DashboardPage";
import OrdersPanel from "../../components/orders/OrdersPanel";
import OrdersTabNav from "../../components/orders/OrdersTabNav";

const Orders: NextPage = () => {
  return (
    <DashboardPage>
      <div>
        <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-10">
          <h2 className="text-[18px] font-bold text-grayDark">سفارش ها</h2>
          <OrdersTabNav />
        </div>
        <div>
          <OrdersPanel />
        </div>
      </div>
    </DashboardPage>
  );
};

export default Orders;
