import { FiPrinter } from "react-icons/fi";

export const PrintSettingsInfo = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-4 flex gap-3 border border-blue-100">
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
        <FiPrinter className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-1">Print Settings</h4>
        <div className="space-y-1">
          <p className="text-xs text-gray-600 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            Include QR code for tracking
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            Add handling instructions
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            Print duplicate copy
          </p>
        </div>
      </div>
    </div>
  );
};
