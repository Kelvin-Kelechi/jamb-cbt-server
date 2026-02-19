import { FiClock } from "react-icons/fi";
import type { PrintJob } from "../../../types/printQueue";
import { getTabActiveStyles } from "../../../pages/PrintQueue";

interface StatusTimelineProps {
  job: PrintJob;
}

export const StatusTimeline = ({ job }: StatusTimelineProps) => {
  const statusStyles = getTabActiveStyles(job.status);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">
        Status & Timeline
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] font-medium text-gray-500 mb-1 block">
            Current Status
          </label>
          <div
            className={`px-3 py-1.5 rounded-lg border text-xs ${statusStyles.bg} ${statusStyles.border} ${statusStyles.text} font-medium inline-block`}
          >
            {job.status}
          </div>
        </div>
        <div>
          <label className="text-[10px] font-medium text-gray-500 mb-1 block">
            Due Status
          </label>
          <div className="px-3 py-1.5 rounded-lg border border-red-100 bg-red-50 text-red-600 text-xs font-medium flex items-center gap-2 inline-flex">
            <FiClock className="w-3.5 h-3.5" />
            45 min
          </div>
        </div>
      </div>
    </div>
  );
};
