import { FiGlobe, FiShield, FiZap, FiStar } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";

export const ProfileBusinessInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Business Details
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-xs font-semibold text-gray-500">
              Business Name
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              Premium DTF Solutions
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">
              Business Type
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              DTF Printing Service
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">Tax ID</div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              ***‑***‑1234
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">Website</div>
            <div className="mt-1 flex items-center gap-2 text-sm font-medium text-blue-600">
              <FiGlobe className="w-4 h-4" />
              <span>www.premiumdtf.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Certifications & Badges
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiShield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Verified Partner
                </div>
                <div className="text-xs text-gray-500">
                  Official verified status
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiStar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Top Rated
                </div>
                <div className="text-xs text-gray-500">
                  Excellent service quality
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <LuPrinter className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  DTF Certified
                </div>
                <div className="text-xs text-gray-500">
                  Professional certification
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center">
                <FiZap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Fast Responder
                </div>
                <div className="text-xs text-gray-500">
                  Quick response times
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            Performance Overview
          </h3>
        </div>
        <div className="divide-y divide-gray-100 text-sm">
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">Total Jobs Completed</span>
            <span className="font-semibold text-gray-900">248</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">Jobs This Month</span>
            <span className="font-semibold text-gray-900">42</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">On-Time Delivery Rate</span>
            <span className="font-semibold text-emerald-600">97.8%</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">Quality Score</span>
            <span className="font-semibold text-gray-900">9.4 / 10</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">Customer Satisfaction</span>
            <span className="font-semibold text-emerald-600">98.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
