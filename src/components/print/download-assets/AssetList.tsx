import { FiFileText, FiImage, FiLayers } from "react-icons/fi";
import { Asset } from "../../../data/assets";

interface AssetListProps {
  assets: Asset[];
  selectedAssets: Set<string>;
  onToggleAsset: (id: string) => void;
}

const FiCheckIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const AssetList = ({
  assets,
  selectedAssets,
  onToggleAsset,
}: AssetListProps) => {
  const getFileIcon = (type: Asset["fileType"]) => {
    switch (type) {
      case "pdf":
        return <FiFileText className="w-5 h-5 text-red-500" />;
      case "png":
      case "jpg":
        return <FiImage className="w-5 h-5 text-blue-500" />;
      case "xlsx":
        return <FiLayers className="w-5 h-5 text-green-500" />;
      default:
        return <FiFileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTagColor = (type: Asset["type"]) => {
    switch (type) {
      case "artwork":
        return "bg-purple-100 text-purple-700";
      case "preview":
        return "bg-blue-100 text-blue-700";
      case "proofs":
        return "bg-orange-100 text-orange-700";
      case "production":
        return "bg-gray-100 text-gray-700";
      case "documents":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {assets.map((asset) => {
        const isSelected = selectedAssets.has(asset.id);
        return (
          <div
            key={asset.id}
            onClick={() => onToggleAsset(asset.id)}
            className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group border ${
              isSelected
                ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                : "border-transparent hover:bg-gray-50 hover:border-gray-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300 bg-white group-hover:border-blue-400"
                }`}
              >
                {isSelected && <FiCheckIcon className="w-3.5 h-3.5" />}
              </div>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${
                  isSelected
                    ? "bg-white border-blue-200"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                {getFileIcon(asset.fileType)}
              </div>
              <div>
                <h4
                  className={`text-sm font-bold ${
                    isSelected ? "text-blue-900" : "text-gray-900"
                  }`}
                >
                  {asset.name}
                </h4>
                <p
                  className={`text-xs ${
                    isSelected ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {asset.size}
                </p>
              </div>
            </div>
            <span
              className={`text-[10px] font-medium px-2.5 py-1 rounded-full capitalize ${getTagColor(
                asset.type
              )}`}
            >
              {asset.type}
            </span>
          </div>
        );
      })}
    </div>
  );
};
