interface Prop {
  title: string;
}

const StatusProductsSort = ({ title }: Prop) => {
  return (
    <div className="sidebar-box__container flex items-center gap-x-6">
      <div className="switch-box">
        <input type="checkbox" className="switch-input" />
      </div>
      <span className="text-[14px]">{title}</span>
    </div>
  );
};

export default StatusProductsSort;
