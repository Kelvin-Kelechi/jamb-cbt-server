import { useState } from "react";
import { Modal } from "../common/Modal";
import { FiCheck } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";

interface RequestPayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  availableAmount?: string;
  jobCount?: number;
}

export const RequestPayoutModal = ({
  isOpen,
  onClose,
  onNext,
  availableAmount = "$640.00",
  jobCount = 3,
}: RequestPayoutModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<"bank" | "paypal">(
    "bank",
  );

  const headerContent = (
    <div>
      <h2 className="text-xl font-bold text-gray-900">Request Payout</h2>
      <p className="text-sm text-gray-500 mt-1">
        Withdraw your pending earnings
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[500px] bg-white"
      title={headerContent}
    >
      <div className="space-y-6">
        {/* Available Amount Box */}
        <div className="bg-blue-50/50 rounded-2xl p-6 text-center border border-blue-100/50">
          <div className="text-sm font-semibold text-blue-600 mb-1">
            Available for Withdrawal
          </div>
          <div className="text-5xl font-bold text-blue-600 tracking-tight mb-2">
            {availableAmount}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            From {jobCount} completed jobs
          </div>
        </div>

        {/* Payout Method */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Payout Method
          </h3>
          <div className="space-y-3">
            {/* Bank Transfer */}
            <div
              onClick={() => setSelectedMethod("bank")}
              className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedMethod === "bank"
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className="flex items-center h-5">
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    selectedMethod === "bank"
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {selectedMethod === "bank" && (
                    <FiCheck className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </div>
              <div className="ml-3">
                <span className="block text-sm font-bold text-gray-900">
                  Bank Transfer
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  2-3 business days
                </span>
              </div>
            </div>

            {/* PayPal */}
            <div
              onClick={() => setSelectedMethod("paypal")}
              className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedMethod === "paypal"
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className="flex items-center h-5">
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    selectedMethod === "paypal"
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {selectedMethod === "paypal" && (
                    <FiCheck className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </div>
              <div className="ml-3">
                <span className="block text-sm font-bold text-gray-900">
                  PayPal
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  Instant transfer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        {selectedMethod === "bank" && (
          <div className="bg-blue-50 rounded-xl p-4 flex gap-2">
            <span className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">Note:</span> Your payout will be
              processed within 1-2 business days. You'll receive a confirmation
              email once the transfer is complete.
            </span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selectedMethod === "bank") {
                onNext();
              } else {
                onClose();
              }
            }}
            className="w-full py-3 px-4 bg-blue-600 border border-transparent rounded-xl text-white font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-200"
          >
            <BiWallet className="w-5 h-5" />
            Request {availableAmount}
          </button>
        </div>
      </div>
    </Modal>
  );
};
