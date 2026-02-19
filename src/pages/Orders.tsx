import { useState } from "react";
import { FiX } from "react-icons/fi";
import { SearchInput } from "../components/common/SearchInput";
import { JobCard } from "../components/orders/JobCard";
import { ordersData, tabs } from "../data/orders";
import type { OrdersTabLabel } from "../types/orders";

const Orders = () => {
  const [activeTab, setActiveTab] = useState<OrdersTabLabel>("All Jobs");
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

  const filteredOrders = ordersData.filter((job) => {
    if (activeTab === "All Jobs") return true;
    if (activeTab === "Pending") return job.status === "Pending Review";
    return job.status === activeTab;
  });

  const handleToggleJob = (id: string) => {
    setSelectedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    const visibleIds = filteredOrders.map((job) => job.id);
    const allVisibleSelected = visibleIds.every((id) =>
      selectedJobs.includes(id),
    );

    if (allVisibleSelected) {
      // Deselect all visible
      setSelectedJobs((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      // Select all visible (merge with existing non-visible selections)
      setSelectedJobs((prev) => {
        const newSelection = new Set([...prev, ...visibleIds]);
        return Array.from(newSelection);
      });
    }
  };

  const isAllVisibleSelected =
    filteredOrders.length > 0 &&
    filteredOrders.every((job) => selectedJobs.includes(job.id));

  const isSomeVisibleSelected =
    filteredOrders.some((job) => selectedJobs.includes(job.id)) &&
    !isAllVisibleSelected;

  const getTabActiveStyles = (label: string) => {
    switch (label) {
      case "Pending":
        return {
          text: "text-orange-600",
          border: "border-orange-600",
          bg: "bg-orange-100",
          badgeText: "text-orange-600",
        };
      case "In Progress":
        return {
          text: "text-blue-600",
          border: "border-blue-600",
          bg: "bg-blue-100",
          badgeText: "text-blue-600",
        };
      case "Ready":
        return {
          text: "text-purple-600",
          border: "border-purple-600",
          bg: "bg-purple-100",
          badgeText: "text-purple-600",
        };
      case "Completed":
        return {
          text: "text-green-600",
          border: "border-green-600",
          bg: "bg-green-100",
          badgeText: "text-green-600",
        };
      default:
        return {
          text: "text-blue-600",
          border: "border-blue-600",
          bg: "bg-blue-100",
          badgeText: "text-blue-600",
        };
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-50 -mx-6 -mt-6 px-6 pt-6 pb-4    ">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Jobs & Orders</h1>
            <p className="text-gray-500 mt-1 text-sm">
              Manage and track all your fulfillment jobs.{" "}
              <span className="text-red-600 font-medium">
                2 jobs awaiting your action • 1 urgent
              </span>
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8 overflow-x-auto">
              {tabs.map((tab) => {
                const styles = getTabActiveStyles(tab.label);
                const isActive = activeTab === tab.label;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                      isActive
                        ? `${styles.border} ${styles.text}`
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        isActive
                          ? `${styles.bg} ${styles.badgeText}`
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search */}
          <div>
            <SearchInput
              placeholder="Search by order ID or customer name..."
              className="w-full bg-white border-gray-200 py-2.5"
              containerClassName="w-full max-w-lg"
            />
          </div>

          {/* Bulk Action Bar */}
          {selectedJobs.length > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-4">
                <span className="text-blue-700 font-medium text-sm pl-2">
                  {selectedJobs.length} job
                  {selectedJobs.length !== 1 ? "s" : ""} selected
                </span>
                <div className="h-4 w-px bg-blue-200" />
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Mark as Complete
                  </button>
                  <button className="px-3 py-1.5 bg-white text-gray-700 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Export Selected
                  </button>
                </div>
              </div>
              <button
                onClick={() => setSelectedJobs([])}
                className="p-1 hover:bg-blue-100 rounded-full text-blue-500 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Select All Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isAllVisibleSelected}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = isSomeVisibleSelected;
                  }
                }}
                onChange={handleSelectAll}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-sm text-gray-700 font-medium">
                Select All
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Showing{" "}
              <span className="text-gray-900 font-bold">
                {filteredOrders.length}
              </span>{" "}
              jobs
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredOrders.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            selected={selectedJobs.includes(job.id)}
            onToggle={handleToggleJob}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
