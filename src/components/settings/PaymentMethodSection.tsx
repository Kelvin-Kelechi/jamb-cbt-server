import { FiCreditCard, FiMail } from "react-icons/fi";
import type { PaymentMethodSectionProps } from "../../types/settings";

const PaymentMethodSection = ({
  primaryMethod,
  setPrimaryMethod,
}: PaymentMethodSectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiCreditCard className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Payment Method
            </h2>
            <p className="text-xs text-gray-500">
              Choose how you want to receive payouts
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setPrimaryMethod("bank")}
          className={`w-full text-left rounded-2xl border px-4 py-4 flex items-center justify-between ${
            primaryMethod === "bank"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                primaryMethod === "bank"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {primaryMethod === "bank" && (
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              )}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Bank Transfer
              </div>
              <div className="text-xs text-gray-500">
                Account ending in ••••1234
              </div>
              <button
                type="button"
                className="mt-1 text-xs font-semibold text-blue-600"
              >
                Update account details
              </button>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setPrimaryMethod("paypal")}
          className={`w-full text-left rounded-2xl border px-4 py-4 flex items-center justify-between ${
            primaryMethod === "paypal"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                primaryMethod === "paypal"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {primaryMethod === "paypal" && (
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              )}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">PayPal</div>
              <div className="text-xs text-gray-500">
                payouts@premiumdtf.com
              </div>
              <button
                type="button"
                className="mt-1 text-xs font-semibold text-blue-600"
              >
                Change email address
              </button>
            </div>
          </div>
        </button>

        <div className="pt-2 border-t border-dashed border-gray-200 mt-2">
          <div className="flex items-start gap-2 text-xs text-gray-500">
            <FiMail className="w-3.5 h-3.5 mt-0.5 text-blue-500" />
            <span>
              Payouts are processed weekly on Fridays. Bank transfers take 2–3
              business days, while PayPal transfers are instant.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodSection;
