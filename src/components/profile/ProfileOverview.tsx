import {
  FiCheckCircle,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FiShield } from "react-icons/fi";

export const ProfileOverview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs font-semibold text-gray-500">Full Name</div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              John Davidson
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">
              Email Address
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                john.davidson@dtfpartner.com
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
                <FiCheckCircle className="w-3 h-3" />
                Verified
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">
              Phone Number
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                +1 (555) 123-4567
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
                <FiCheckCircle className="w-3 h-3" />
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Address</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <div className="text-xs font-semibold text-gray-500">
              Street Address
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              1234 Print Street
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">City</div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              Los Angeles
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">State</div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              California
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">ZIP Code</div>
            <div className="mt-1 text-sm font-medium text-gray-900">90001</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">Country</div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              United States
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Verification Status
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiMail size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Email Verification
                </div>
                <div className="text-xs text-gray-500">
                  Verify your email address
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
              <FiCheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiPhone size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Phone Verification
                </div>
                <div className="text-xs text-gray-500">
                  Verify your phone number
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
              <FiCheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiShield size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Business Verification
                </div>
                <div className="text-xs text-gray-500">
                  Verify your business credentials
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
              <FiCheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
