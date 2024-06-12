import { NextPage } from "next";
import DashboardPage from "../../components/DashboardPage";
import ReviewsTabNav from "../../components/reviews/ReviewsTabNav";

const Reviews: NextPage = () => {
  return (
    <DashboardPage>
      <div>
        <div className="flex gap-x-10">
          <h2 className="text-[18px] font-bold text-grayDark">نظرات</h2>
          <ReviewsTabNav />
        </div>
      </div>
    </DashboardPage>
  );
};

export default Reviews;
