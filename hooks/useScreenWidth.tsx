import { useCallback, useEffect, useState } from "react";
import { getScreenWidth } from "../lib/screenWidth";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(
    getScreenWidth().width
  );

  const handleScreenWidthResize = useCallback(
    () => setScreenWidth(getScreenWidth().width),
    [screenWidth]
  );

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidthResize);

    return () => window.removeEventListener("resize", handleScreenWidthResize);
  }, [screenWidth, handleScreenWidthResize]);

  return screenWidth;
};

export default useScreenWidth;
