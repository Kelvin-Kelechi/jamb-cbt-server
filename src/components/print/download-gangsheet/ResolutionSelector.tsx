import type { Resolution } from "../../../types/printQueue";

interface ResolutionSelectorProps {
  selectedResolution: Resolution;
  onChange: (resolution: Resolution) => void;
}

export const ResolutionSelector = ({
  selectedResolution,
  onChange,
}: ResolutionSelectorProps) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3">Resolution</h3>
      <div className="grid grid-cols-4 gap-3">
        {[
          { val: "150", label: "Draft" },
          { val: "300", label: "Standard" },
          { val: "600", label: "High Quality" },
          { val: "1200", label: "Ultra HD" },
        ].map((item) => {
          const isSelected = selectedResolution === item.val;
          return (
            <button
              key={item.val}
              onClick={() => onChange(item.val as Resolution)}
              className={`p-3 rounded-xl border text-center transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500"
                  : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <span className="block text-sm font-bold text-gray-900">
                {item.val} DPI
              </span>
              <span className="block text-[10px] text-gray-500 mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
