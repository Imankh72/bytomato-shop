export const getScreenWidth = () => {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  return {
    width,
  };
};
