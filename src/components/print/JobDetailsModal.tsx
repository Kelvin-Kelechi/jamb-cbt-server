import { useState } from "react";
import { Modal } from "../common/Modal";
import { DownloadGangsheetModal } from "./DownloadGangsheetModal";
import { DownloadAssetsModal } from "./DownloadAssetsModal";
import { PrintLabelModal } from "./PrintLabelModal";
import type { PrintJob } from "../../types/printQueue";
import { StatusTimeline } from "./job-details/StatusTimeline";
import { PrintSpecifications } from "./job-details/PrintSpecifications";
import { ProductionNotes } from "./job-details/ProductionNotes";
import { QuickActions } from "./job-details/QuickActions";
import { CustomerInformation } from "./job-details/CustomerInformation";
import { OrderDetails } from "./job-details/OrderDetails";

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: PrintJob | null;
}

export const JobDetailsModal = ({
  isOpen,
  onClose,
  job,
}: JobDetailsModalProps) => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false);
  const [isPrintLabelModalOpen, setIsPrintLabelModalOpen] = useState(false);

  if (!job) return null;

  if (isDownloadModalOpen) {
    return (
      <DownloadGangsheetModal
        isOpen={true}
        onClose={() => setIsDownloadModalOpen(false)}
        job={job}
      />
    );
  }

  if (isAssetsModalOpen) {
    return (
      <DownloadAssetsModal
        isOpen={true}
        onClose={() => setIsAssetsModalOpen(false)}
        job={job}
      />
    );
  }

  if (isPrintLabelModalOpen) {
    return (
      <PrintLabelModal
        isOpen={true}
        onClose={() => setIsPrintLabelModalOpen(false)}
        job={job}
      />
    );
  }

  const headerContent = (
    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-gray-900">{job.orderId}</h2>
        {job.priority === "Urgent" && (
          <span className="bg-red-100 text-red-600 text-[10px] font-medium px-2 py-0.5 rounded">
            URGENT
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-0.5">{job.customer}</p>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[850px] bg-[#F8FAFC]"
      title={headerContent}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column (2 cols wide) */}
        <div className="lg:col-span-2 space-y-4">
          <StatusTimeline job={job} />
          <PrintSpecifications job={job} />
          <ProductionNotes />
        </div>

        {/* Right Column (1 col wide) */}
        <div className="space-y-4">
          <QuickActions
            onDownloadGangsheet={() => setIsDownloadModalOpen(true)}
            onDownloadAssets={() => setIsAssetsModalOpen(true)}
            onPrintLabel={() => setIsPrintLabelModalOpen(true)}
          />
          <CustomerInformation job={job} />
          <OrderDetails job={job} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-start gap-3 mt-6 pt-4 border-t border-gray-200">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Close
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
          Mark as Complete
        </button>
      </div>
    </Modal>
  );
};
