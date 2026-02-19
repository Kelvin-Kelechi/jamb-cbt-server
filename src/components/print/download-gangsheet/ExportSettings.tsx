import { FiSettings } from "react-icons/fi";
import type { ExportSettingsState } from "../../../types/printQueue";

interface ExportSettingsProps {
  settings: ExportSettingsState;
  onToggle: (key: keyof ExportSettingsState) => void;
}

export const ExportSettings = ({ settings, onToggle }: ExportSettingsProps) => {
  return (
    <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
          <FiSettings className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-gray-900">Export Settings</h3>
      </div>
      <div className="space-y-2 pl-10">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.cropMarks}
            onChange={() => onToggle("cropMarks")}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-gray-600">Include crop marks</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.colorBars}
            onChange={() => onToggle("colorBars")}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-gray-600">Include color bars</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.embedICC}
            onChange={() => onToggle("embedICC")}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-gray-600">Embed ICC profile</span>
        </label>
      </div>
    </div>
  );
};
