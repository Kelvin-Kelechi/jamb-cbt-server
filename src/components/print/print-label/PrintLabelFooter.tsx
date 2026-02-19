import { FiPrinter } from "react-icons/fi";

interface PrintLabelFooterProps {
  onClose: () => void;
  onPrint: () => void;
}

export const PrintLabelFooter = ({
  onClose,
  onPrint,
}: PrintLabelFooterProps) => {
  return (
    <div className="flex justify-start gap-3 pt-2 border-t border-gray-100">
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={onPrint}
        className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 flex items-center gap-2"
      >
        <FiPrinter className="w-4 h-4" />
        Print Label
      </button>
    </div>
  );
};
