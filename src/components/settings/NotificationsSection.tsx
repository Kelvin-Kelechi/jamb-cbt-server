import { FiBell } from "react-icons/fi";
import { Toggle } from "../common/Toggle";
import type { NotificationsSectionProps } from "../../types/settings";

const NotificationsSection = ({
  emailNewJobs,
  setEmailNewJobs,
  emailJobUpdates,
  setEmailJobUpdates,
  emailPayoutAlerts,
  setEmailPayoutAlerts,
  emailSystemAlerts,
  setEmailSystemAlerts,
  smsUrgentJobs,
  setSmsUrgentJobs,
  smsPayoutComplete,
  setSmsPayoutComplete,
}: NotificationsSectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiBell className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Notifications
            </h2>
            <p className="text-xs text-gray-500">
              Manage your communication settings and alerts
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 mb-3">
            Email Notifications
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">New Jobs</span>
              <Toggle enabled={emailNewJobs} setEnabled={setEmailNewJobs} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Job Updates</span>
              <Toggle
                enabled={emailJobUpdates}
                setEnabled={setEmailJobUpdates}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Payout Alerts</span>
              <Toggle
                enabled={emailPayoutAlerts}
                setEnabled={setEmailPayoutAlerts}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">System Alerts</span>
              <Toggle
                enabled={emailSystemAlerts}
                setEnabled={setEmailSystemAlerts}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 mb-3">
            SMS Notifications
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Urgent Jobs</span>
              <Toggle
                enabled={smsUrgentJobs}
                setEnabled={setSmsUrgentJobs}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Payout Complete</span>
              <Toggle
                enabled={smsPayoutComplete}
                setEnabled={setSmsPayoutComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
