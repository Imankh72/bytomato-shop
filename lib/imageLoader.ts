export const imageLoader = ({ src }: any) => {
  return `http://103.75.196.169:8090/Images/Products/${src}`;
};

export const createUrl = (imageUrl: string) => {
  return imageUrl.split("/Products")[1];
};
