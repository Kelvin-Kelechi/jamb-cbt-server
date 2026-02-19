import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import type { PrintJob } from "../../../types/printQueue";

interface CustomerInformationProps {
  job: PrintJob;
}

export const CustomerInformation = ({ job }: CustomerInformationProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">
        Customer Information
      </h3>
      <div className="space-y-3">
        <div className="flex gap-2.5">
          <div className="w-4 h-4 text-gray-400 mt-0.5">
            <FiUser className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Customer Name</div>
            <div className="text-xs font-medium text-gray-900">
              {job.customer}
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="w-4 h-4 text-gray-400 mt-0.5">
            <FiMail className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Email</div>
            <div className="text-xs font-medium text-gray-900">
              contact@sarahjohnson.com
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="w-4 h-4 text-gray-400 mt-0.5">
            <FiPhone className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Phone</div>
            <div className="text-xs font-medium text-gray-900">
              +1 (555) 123-4567
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="w-4 h-4 text-gray-400 mt-0.5">
            <FiMapPin className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Shipping Address</div>
            <div className="text-xs font-medium text-gray-900">
              1234 Market Street, Suite 500,
              <br />
              San Francisco, CA 94102
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-[10px] text-gray-500">Region</span>
        <span className="text-[10px] font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">
          West Coast
        </span>
      </div>
    </div>
  );
};
