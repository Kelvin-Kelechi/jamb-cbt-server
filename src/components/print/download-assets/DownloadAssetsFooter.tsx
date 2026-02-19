import { FiAlertCircle, FiDownload } from "react-icons/fi";

interface DownloadAssetsFooterProps {
  onClose: () => void;
  selectedCount: number;
  onDownload: () => void;
}

export const DownloadAssetsFooter = ({
  onClose,
  selectedCount,
  onDownload,
}: DownloadAssetsFooterProps) => {
  return (
    <div className="pt-4 border-t border-gray-100 space-y-4">
      <div className="flex justify-start gap-3">
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onDownload}
          disabled={selectedCount === 0}
          className={`px-6 py-2.5 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm ${
            selectedCount > 0
              ? "bg-blue-400 hover:bg-blue-500 shadow-blue-200"
              : "bg-blue-200 cursor-not-allowed"
          }`}
        >
          <FiDownload className="w-4 h-4" />
          Download {selectedCount} Files
        </button>
      </div>

      {selectedCount === 0 && (
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center gap-2 text-orange-600">
          <FiAlertCircle className="w-4 h-4" />
          <span className="text-xs font-medium">
            Please select at least one asset to download
          </span>
        </div>
      )}
    </div>
  );
};
