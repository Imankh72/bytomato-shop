import { useState } from "react";
import { CheckIcon } from "../svgs/CheckIcon";

interface Color {
  id: number;
  colorCode: string;
  colorName: string;
}

interface Colors {
  colors: Color[];
}

const ProductColors = ({ colors }: Colors) => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  return (
    <div>
      <div className="text-[13px] text-secondary mb-4">
        <span>رنگ: </span>
        <span>{selectedColor.colorName}</span>
      </div>
      <div className="flex items-center mb-8">
        {colors.map(({ id, colorCode }, index) => (
          <span
            key={id}
            className={`p-1 rounded-lg flex justify-center items-center w-8 h-8 ${
              selectedColor.colorCode === colorCode
                ? "border border-blue"
                : "border-none"
            }`}
          >
            <span
              className="inline-block p-1 rounded-md w-6 h-6 border border-neutral-200 cursor-pointer relative"
              style={{
                background: colorCode,
              }}
              onClick={() => setSelectedColor(colors[index])}
            >
              {selectedColor.colorCode === colorCode && (
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <CheckIcon
                    className={`w-6 h-3 ${
                      selectedColor.colorCode === "#fff"
                        ? "stroke-secondary"
                        : "stroke-white"
                    }`}
                  />
                </span>
              )}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
