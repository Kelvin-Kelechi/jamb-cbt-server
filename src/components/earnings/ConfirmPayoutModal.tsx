import { useState, useEffect } from "react";
import { Modal } from "../common/Modal";
import { FiAlertCircle } from "react-icons/fi";

interface ConfirmPayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount?: string;
}

export const ConfirmPayoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  amount = "$ 640.00",
}: ConfirmPayoutModalProps) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Extract numeric value from string (e.g. "$ 640.00" -> "640.00")
      const numericValue = amount.replace(/[^0-9.]/g, "");
      setInputValue(numericValue);
    }
  }, [isOpen, amount]);

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
        {/* Amount Input Display */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Amount to Withdraw
          </label>
          <div className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white shadow-sm flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-400">$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value;
                // Only allow numbers and up to 2 decimal places
                if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
                  setInputValue(value);
                }
              }}
              className="w-full text-2xl font-bold text-blue-600 outline-none bg-transparent placeholder-blue-300"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
          <div className="flex gap-3">
            <FiAlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                Payout Information
              </h4>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  Payouts are processed within 2-3 business days
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  Funds will be sent to your selected payment method
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  You'll receive a confirmation email once processed
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full py-3 px-4 bg-blue-600 border border-transparent rounded-xl text-white font-bold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
          >
            Confirm Request
          </button>
        </div>
      </div>
    </Modal>
  );
};
