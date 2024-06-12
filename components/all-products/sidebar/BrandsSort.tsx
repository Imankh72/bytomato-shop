const BrandsSort = () => {
  return (
    <div className="my-6">
      {brandsData.map(({ id, persian, english }) => (
        <div key={id} className="flex justify-between my-4 last:mb-0">
          <div className="flex gap-x-2 pr-6">
            <label className="checkbox-container">
              <input className="checkbox" type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <span className="text-[14px] mt-1">{persian}</span>
          </div>
          <span className="text-[14px] text-secondary mt-1">{english}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandsSort;

const brandsData = [
  { id: 1, persian: "شیائومی", english: "xiaomi" },
  { id: 2, persian: "متفرقه", english: "etc" },
  { id: 3, persian: "اپل", english: "apple" },
  { id: 4, persian: "سامسونگ", english: "samsung" },
  { id: 5, persian: "هوآوی", english: "huawei" },
  { id: 6, persian: "لنوو", english: "lenovo" },
];
