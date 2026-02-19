import type { PrintJob } from "../../../types/printQueue";

interface OrderDetailsProps {
  job: PrintJob;
}

export const OrderDetails = ({ job }: OrderDetailsProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">Order Details</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-500 text-xs">Order ID</span>
          <span className="font-medium text-gray-900 text-xs">
            {job.orderId}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-xs">Created</span>
          <span className="font-medium text-gray-900 text-xs">
            Dec 15, 2025
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-xs">Due Date</span>
          <span className="font-medium text-red-600 text-xs">Dec 18, 2025</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-100">
          <span className="text-gray-500 text-xs">Total Sheets</span>
          <span className="font-bold text-gray-900 text-xs">48</span>
        </div>
      </div>
    </div>
  );
};
