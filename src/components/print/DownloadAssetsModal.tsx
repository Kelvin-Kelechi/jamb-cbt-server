import { useState, useMemo } from "react";
import { FiDownload } from "react-icons/fi";
import { Modal } from "../common/Modal";
import type { PrintJob } from "../../types/printQueue";
import { MOCK_ASSETS } from "../../data/assets";
import { AssetStatsBar } from "./download-assets/AssetStatsBar";
import { AssetList } from "./download-assets/AssetList";
import { DownloadFormatSelector } from "./download-assets/DownloadFormatSelector";
import { DownloadAssetsFooter } from "./download-assets/DownloadAssetsFooter";

interface DownloadAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: PrintJob;
}

export const DownloadAssetsModal = ({
  isOpen,
  onClose,
  job,
}: DownloadAssetsModalProps) => {
  const [selectedAssets, setSelectedAssets] = useState<Set<string>>(new Set());
  const [downloadFormat, setDownloadFormat] = useState<"zip" | "individual">(
    "zip",
  );

  const totalSize = useMemo(() => {
    // Simple mock calculation based on string parsing for demo
    // In real app, would use bytes
    let totalMB = 0;
    selectedAssets.forEach((id) => {
      const asset = MOCK_ASSETS.find((a) => a.id === id);
      if (asset) {
        const val = parseFloat(asset.size);
        if (asset.size.includes("MB")) totalMB += val;
        if (asset.size.includes("KB")) totalMB += val / 1024;
      }
    });
    return totalMB.toFixed(1);
  }, [selectedAssets]);

  const toggleAsset = (id: string) => {
    const newSelected = new Set(selectedAssets);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedAssets(newSelected);
  };

  const toggleAll = () => {
    if (selectedAssets.size === MOCK_ASSETS.length) {
      setSelectedAssets(new Set());
    } else {
      setSelectedAssets(new Set(MOCK_ASSETS.map((a) => a.id)));
    }
  };

  const headerContent = (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
        <FiDownload className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900 leading-none mt-1">
          Download Assets
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Order {job.orderId} • {job.customer}
        </p>
      </div>
    </div>
  );

  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading", selectedAssets.size, "files as", downloadFormat);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[800px] bg-white"
      title={headerContent}
    >
      <div className="space-y-6">
        <AssetStatsBar
          selectedCount={selectedAssets.size}
          totalSize={totalSize}
          totalAssets={MOCK_ASSETS.length}
          onToggleAll={toggleAll}
        />

        <AssetList
          assets={MOCK_ASSETS}
          selectedAssets={selectedAssets}
          onToggleAsset={toggleAsset}
        />

        {selectedAssets.size > 0 && (
          <DownloadFormatSelector
            format={downloadFormat}
            onChange={setDownloadFormat}
          />
        )}

        <DownloadAssetsFooter
          onClose={onClose}
          selectedCount={selectedAssets.size}
          onDownload={handleDownload}
        />
      </div>
    </Modal>
  );
};
