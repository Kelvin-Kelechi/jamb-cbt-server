import { FiCheck } from "react-icons/fi";
import type { LabelSize } from "../../../types/printQueue";

interface LabelSizeSelectorProps {
  selectedSize: LabelSize;
  onChange: (size: LabelSize) => void;
}

export const LabelSizeSelector = ({
  selectedSize,
  onChange,
}: LabelSizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-gray-900">Label Size</h3>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onChange("4x6")}
          className={`p-3 rounded-xl border text-left transition-all relative ${
            selectedSize === "4x6"
              ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
              : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="font-bold text-sm text-gray-900">4" × 6"</div>
          <div className="text-[10px] text-gray-500 mt-0.5">
            Standard shipping
          </div>
          {selectedSize === "4x6" && (
            <div className="absolute top-3 right-3 text-blue-600">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
          )}
        </button>

        <button
          onClick={() => onChange("4x4")}
          className={`p-3 rounded-xl border text-left transition-all relative ${
            selectedSize === "4x4"
              ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
              : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="font-bold text-sm text-gray-900">4" × 4"</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Square format</div>
          {selectedSize === "4x4" && (
            <div className="absolute top-3 right-3 text-blue-600">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
          )}
        </button>

        <button
          onClick={() => onChange("2x4")}
          className={`p-3 rounded-xl border text-left transition-all relative ${
            selectedSize === "2x4"
              ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
              : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="font-bold text-sm text-gray-900">2" × 4"</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Small package</div>
          {selectedSize === "2x4" && (
            <div className="absolute top-3 right-3 text-blue-600">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
