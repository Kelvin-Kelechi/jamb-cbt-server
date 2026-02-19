import { useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { Modal } from "../common/Modal";
import type { PrintJob, LabelSize } from "../../types/printQueue";
import { LabelPreview } from "./print-label/LabelPreview";
import { LabelSizeSelector } from "./print-label/LabelSizeSelector";
import { PrintSettingsInfo } from "./print-label/PrintSettingsInfo";
import { PrintLabelFooter } from "./print-label/PrintLabelFooter";

interface PrintLabelModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: PrintJob;
}

export const PrintLabelModal = ({
  isOpen,
  onClose,
  job,
}: PrintLabelModalProps) => {
  const [selectedSize, setSelectedSize] = useState<LabelSize>("2x4");

  const headerContent = (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
        <FiPrinter className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900 leading-none mt-1">
          Print Shipping Label
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Order {job.orderId} • {job.customer}
        </p>
      </div>
    </div>
  );

  const handlePrint = () => {
    // Implement print logic here
    console.log("Printing label with size:", selectedSize);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[850px] bg-white"
      title={headerContent}
    >
      <div className="space-y-6">
        <LabelPreview job={job} />

        <LabelSizeSelector
          selectedSize={selectedSize}
          onChange={setSelectedSize}
        />

        <PrintSettingsInfo />

        <PrintLabelFooter onClose={onClose} onPrint={handlePrint} />
      </div>
    </Modal>
  );
};
