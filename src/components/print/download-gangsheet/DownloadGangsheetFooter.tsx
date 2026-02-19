interface DownloadGangsheetFooterProps {
  onClose: () => void;
  onComplete?: () => void;
}

export const DownloadGangsheetFooter = ({
  onClose,
  onComplete,
}: DownloadGangsheetFooterProps) => {
  return (
    <div className="flex justify-start gap-3 pt-4 border-t border-gray-100">
      <button
        onClick={onClose}
        className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
      >
        Close
      </button>
      <button
        onClick={onComplete}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
      >
        Mark as Complete
      </button>
    </div>
  );
};
