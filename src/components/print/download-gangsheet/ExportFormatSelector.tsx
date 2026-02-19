import { FiCheck } from "react-icons/fi";
import type { ExportFormat } from "../../../types/printQueue";

interface ExportFormatSelectorProps {
  selectedFormat: ExportFormat;
  onChange: (format: ExportFormat) => void;
}

export const ExportFormatSelector = ({
  selectedFormat,
  onChange,
}: ExportFormatSelectorProps) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3">Export Format</h3>
      <div className="grid grid-cols-3 gap-3">
        {(["PDF", "PNG", "TIFF"] as const).map((format) => {
          const isSelected = selectedFormat === format;
          return (
            <button
              key={format}
              onClick={() => onChange(format)}
              className={`relative p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500"
                  : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="block text-sm font-bold text-gray-900">
                    {format}
                  </span>
                  <span className="block text-xs text-gray-500 mt-0.5">
                    {format === "PDF"
                      ? "Best for printing"
                      : format === "PNG"
                      ? "High quality image"
                      : "Professional grade"}
                  </span>
                </div>
                {isSelected && <FiCheck className="w-4 h-4 text-blue-600" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
