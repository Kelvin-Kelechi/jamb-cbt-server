import { useState } from "react";
import { FiHelpCircle, FiEye } from "react-icons/fi";
import { SearchInput } from "../components/common/SearchInput";
import { GenericTable } from "../components/common/GenericTable";
import { JobDetailsModal } from "../components/print/JobDetailsModal";
import { printQueueData, printQueueTabs } from "../data/printQueue";
import type { PrintJob } from "../types/printQueue";

export const getTabActiveStyles = (label: string) => {
  switch (label) {
    case "Printing":
      return {
        text: "text-amber-600",
        border: "border-amber-600",
        bg: "bg-amber-100",
        badgeText: "text-amber-600",
      };
    case "Completed":
      return {
        text: "text-green-600",
        border: "border-green-600",
        bg: "bg-green-100",
        badgeText: "text-green-600",
      };
    case "Quality Check":
      return {
        text: "text-emerald-700",
        border: "border-emerald-700",
        bg: "bg-emerald-100",
        badgeText: "text-emerald-700",
      };
    case "Processing":
      return {
        text: "text-indigo-600",
        border: "border-indigo-600",
        bg: "bg-indigo-100",
        badgeText: "text-indigo-600",
      };
    case "Urgent":
      return {
        text: "text-red-500",
        border: "border-red-500",
        bg: "bg-red-100",
        badgeText: "text-red-500",
      };
    case "Pending":
      return {
        text: "text-gray-600",
        border: "border-gray-600",
        bg: "bg-gray-100",
        badgeText: "text-gray-600",
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

const PrintQueue = () => {
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [selectedJob, setSelectedJob] = useState<PrintJob | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (job: PrintJob) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Printing":
        return "text-amber-600";
      case "Completed":
        return "text-green-600";
      case "Quality Check":
        return "text-emerald-700";
      case "Processing":
        return "text-indigo-600";
      case "Urgent":
        return "text-red-500";
      case "Pending":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const columns = [
    {
      header: "Order ID",
      key: "id" as keyof PrintJob,
      render: (job: PrintJob) => (
        <span className="font-medium text-gray-900">{job.id}</span>
      ),
    },
    {
      header: "Customer",
      key: "customer" as keyof PrintJob,
      className: "text-gray-700",
    },
    {
      header: "Sheet Size",
      key: "sheetSize" as keyof PrintJob,
      className: "text-gray-700",
    },
    {
      header: "Order",
      key: "orderDescription" as keyof PrintJob,
      className: "text-gray-700",
    },
    {
      header: "Status",
      key: "status" as keyof PrintJob,
      render: (job: PrintJob) => (
        <span className={`font-medium ${getStatusColor(job.status)}`}>
          {job.status}
        </span>
      ),
    },
    {
      header: "Deadline",
      key: "deadline" as keyof PrintJob,
      className: "text-gray-700",
    },
    {
      header: "Actions",
      render: () => (
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <FiEye className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const filteredData = printQueueData.filter((job) => {
    if (activeTab === "All Jobs") return true;
    return job.status === activeTab;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Sticky Header Container */}
      <div className="sticky top-0 z-10 bg-gray-50 -mx-6 -mt-6 px-6 pt-6 pb-4  ">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Print Queue</h1>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
              <FiHelpCircle className="w-5 h-5" />
              <span className="font-medium">Help</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8 overflow-x-auto">
              {printQueueTabs.map((tab) => {
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
              className="w-full bg-white border-gray-200 py-3"
              containerClassName="max-w-[600px]"
            />
          </div>

          {/* Showing count */}
          <div className="text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredData.length}
            </span>{" "}
            jobs
          </div>
        </div>
      </div>

      {/* Table Card */}
      <GenericTable<PrintJob>
        title="Recent Orders"
        data={filteredData}
        columns={columns}
        itemsPerPage={10}
        onRowClick={handleRowClick}
      />

      <JobDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={selectedJob}
      />
    </div>
  );
};

export default PrintQueue;
