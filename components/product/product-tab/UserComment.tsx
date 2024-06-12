import StarsBox from "./StarsBox";

interface Props {
  shortComment: string;
  userName: string;
  offerToBuy: boolean;
  longComment: string;
}

const UserComment = ({
  shortComment,
  userName,
  offerToBuy,
  longComment,
}: Props) => {
  return (
    <div className="py-8 border-b border-neutral-200 lg:px-4">
      <StarsBox />
      <div className="flex flex-col gap-y-5 my-2 lg:flex-row lg:items-center lg:justify-between">
        <span>{shortComment}</span>
        <div className="bg-neutral-100 text-[14px] leading-[32px] text-green rounded-md text-center w-[75%] font-light lg:w-[20%]">
          {offerToBuy && "خرید این محصول را توصیه میکنم"}
        </div>
      </div>
      <span className="inline-block text-[14px] text-secondary mb-8">
        {userName}
      </span>
      <p className="text-[14px] leading-[32px] text-grayDark">{longComment}</p>
    </div>
  );
};

export default UserComment;
