import { FiLayers, FiFileText, FiDroplet } from "react-icons/fi";
import type { PrintJob } from "../../../types/printQueue";

interface PrintSpecificationsProps {
  job: PrintJob;
}

export const PrintSpecifications = ({ job }: PrintSpecificationsProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">
        Print Specifications
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-50 p-2.5 rounded-lg flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <FiLayers className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Sheet Size</div>
            <div className="text-sm font-bold text-gray-900">
              {job.sheetSize || '12×16"'}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-2.5 rounded-lg flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <FiFileText className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Quantity</div>
            <div className="text-sm font-bold text-gray-900">48 sheets</div>
          </div>
        </div>
        <div className="bg-gray-50 p-2.5 rounded-lg flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <FiDroplet className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Ink Type</div>
            <div className="text-sm font-bold text-gray-900">CMYK+W</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between py-1.5 border-b border-gray-50 text-xs">
          <span className="text-gray-500">Resolution</span>
          <span className="font-medium text-gray-900">
            300 DPI - High Quality
          </span>
        </div>
        <div className="flex justify-between py-1.5 border-b border-gray-50 text-xs">
          <span className="text-gray-500">Finish Type</span>
          <span className="font-medium text-gray-900">Matte Powder</span>
        </div>
        <div className="flex justify-between py-1.5 border-b border-gray-50 text-xs">
          <span className="text-gray-500">White Underbase</span>
          <span className="font-medium text-gray-900">100% Coverage</span>
        </div>
        <div className="flex justify-between py-1.5 border-b border-gray-50 text-xs">
          <span className="text-gray-500">Color Profile</span>
          <span className="font-medium text-gray-900">Full CMYK</span>
        </div>
      </div>
    </div>
  );
};
