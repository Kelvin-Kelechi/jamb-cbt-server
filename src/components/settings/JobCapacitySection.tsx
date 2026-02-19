import { FiSettings } from "react-icons/fi";
import { Toggle } from "../common/Toggle";
import type { JobCapacitySectionProps } from "../../types/settings";

const JobCapacitySection = ({
  autoAcceptJobs,
  setAutoAcceptJobs,
}: JobCapacitySectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiSettings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Job Capacity
            </h2>
            <p className="text-xs text-gray-500">
              Configure your daily workload limits
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-5 mt-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-800">
              Auto-Accept Jobs
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Automatically accept jobs when within your daily capacity
            </p>
          </div>
          <Toggle enabled={autoAcceptJobs} setEnabled={setAutoAcceptJobs} />
        </div>
      </div>
    </section>
  );
};

export default JobCapacitySection;
