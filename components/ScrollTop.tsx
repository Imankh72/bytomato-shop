import { useEffect, useState } from "react";
import TopArrow from "./svgs/TopArrow";

interface ScrollTopProps {
  height: number;
}

const ScrollTop = ({ height }: ScrollTopProps) => {
  const [showToScrollTop, setShowToScrollTop] = useState(false);

  // Function To Scroll Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling
    const toggleVisibility = () => {
      if (window.pageYOffset > height / 3) {
        setShowToScrollTop(true);
      } else {
        setShowToScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [height]);

  return (
    <div>
      {showToScrollTop && (
        <button
          className="w-[50px] h-[50px] bg-neutral-100 drop-shadow-xl p-4 flex justify-center items-center fixed rounded-full z-40 bottom-3 border border-primary right-3 lg:bottom-10 lg:right-10 lg:w-[55px]
            lg:h-[55px] lg:transition-all lg:duration-300 lg:hover:bg-neutral-200"
          onClick={scrollToTop}
        >
          <TopArrow />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
