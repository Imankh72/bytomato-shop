interface Props {
  selected: number;
  toggle: (id: number) => void;
}

const UsersCommentsNav = ({ selected, toggle }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-6 border-b px-4 border-neutral-100 lg:flex-row lg:justify-between">
        <div className="text-[18px]">نظر کاربران</div>
        <div className="flex items-center gap-x-14 text-[13px] text-secondary lg:text-[15px]">
          <span
            className={`users-comments__nav__item ${
              selected === 1 ? "users-comments__nav__item--active" : ""
            }`}
            onClick={() => toggle(1)}
          >
            جدیدترین‌ها
          </span>
          <span
            className={`users-comments__nav__item ${
              selected === 2 ? "users-comments__nav__item--active" : ""
            }`}
            onClick={() => toggle(2)}
          >
            نظر خریداران
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersCommentsNav;
