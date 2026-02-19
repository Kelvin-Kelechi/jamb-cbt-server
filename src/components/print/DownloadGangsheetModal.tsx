import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Modal } from "../common/Modal";
import type {
  PrintJob,
  ExportFormat,
  Resolution,
  ExportSettingsState,
} from "../../types/printQueue";
import { GangsheetPreview } from "./download-gangsheet/GangsheetPreview";
import { ExportFormatSelector } from "./download-gangsheet/ExportFormatSelector";
import { ResolutionSelector } from "./download-gangsheet/ResolutionSelector";
import { ExportSettings } from "./download-gangsheet/ExportSettings";

interface DownloadGangsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: PrintJob;
}

export const DownloadGangsheetModal = ({
  isOpen,
  onClose,
  job,
}: DownloadGangsheetModalProps) => {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>("PDF");
  const [selectedResolution, setSelectedResolution] =
    useState<Resolution>("300");
  const [settings, setSettings] = useState<ExportSettingsState>({
    cropMarks: false,
    colorBars: false,
    embedICC: false,
  });

  const toggleSetting = (key: keyof ExportSettingsState) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const headerContent = (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
        <FiDownload className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900 leading-none mt-1">
          Download Gangsheet
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Order {job.orderId} • {job.customer}
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[800px] bg-white"
      title={headerContent}
    >
      <div className="space-y-6">
        <GangsheetPreview />

        <ExportFormatSelector
          selectedFormat={selectedFormat}
          onChange={setSelectedFormat}
        />

        <ResolutionSelector
          selectedResolution={selectedResolution}
          onChange={setSelectedResolution}
        />

        <ExportSettings settings={settings} onToggle={toggleSetting} />

        <DownloadGangsheetFooter onClose={onClose} />
      </div>
    </Modal>
  );
};
