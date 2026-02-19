import { FiClock } from "react-icons/fi";
import { Toggle } from "../common/Toggle";
import type { BusinessHoursSectionProps } from "../../types/settings";

const BusinessHoursSection = ({ days }: BusinessHoursSectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiClock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Business Hours
            </h2>
            <p className="text-xs text-gray-500">
              Set your availability for accepting new jobs
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {days.map((day) => (
          <div
            key={day.label}
            className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-100"
          >
            <div className="flex items-center gap-3">
              <Toggle
                enabled={day.enabled}
                setEnabled={day.setEnabled}
              />
              <span className="text-sm font-medium text-gray-900 w-24">
                {day.label}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="9:00am"
                defaultValue={day.start}
                className="w-24 px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <span className="text-gray-400 text-xs">to</span>
              <input
                type="text"
                placeholder="6:00pm"
                defaultValue={day.end}
                className="w-24 px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessHoursSection;
