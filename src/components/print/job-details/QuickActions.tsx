import { FiDownload, FiPrinter } from "react-icons/fi";

interface QuickActionsProps {
  onDownloadGangsheet: () => void;
  onDownloadAssets: () => void;
  onPrintLabel: () => void;
}

export const QuickActions = ({
  onDownloadGangsheet,
  onDownloadAssets,
  onPrintLabel,
}: QuickActionsProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">Quick Actions</h3>
      <div className="space-y-2">
        <button
          onClick={onDownloadGangsheet}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600"
        >
          <FiDownload className="w-3.5 h-3.5" />
          Download Gangsheet
        </button>
        <button
          onClick={onDownloadAssets}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600"
        >
          <FiDownload className="w-3.5 h-3.5" />
          Download Assets
        </button>
        <button
          onClick={onPrintLabel}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600"
        >
          <FiPrinter className="w-3.5 h-3.5" />
          Print Label
        </button>
      </div>
    </div>
  );
};
