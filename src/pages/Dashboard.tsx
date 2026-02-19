import { FiEye } from "react-icons/fi";
import { statsData, urgentJobsData } from "../data/dashboard";
import { AlertBanner } from "../components/common/AlertBanner";
import { StatCard } from "../components/stats/StatCard";
import { GenericTable } from "../components/common/GenericTable";
import { StatusBadge } from "../components/common/StatusBadge";
import type { DashboardJob } from "../types/dashboard";

const Dashboard = () => {
  const columns = [
    {
      header: "Job ID",
      key: "id" as const,
      className: "font-medium text-gray-900",
    },
    {
      header: "Customer Name",
      key: "customerName" as const,
      className: "text-gray-600",
    },
    { header: "Order", key: "order" as const, className: "text-gray-600" },
    {
      header: "Deadline",
      key: "deadline" as const,
      className: "text-gray-600",
    },
    {
      header: "Status",
      render: (job: DashboardJob) => <StatusBadge status={job.status} />,
    },
    {
      header: "Action",
      className: "text-center",
      render: () => (
        <div className="flex justify-center">
          <button className="text-gray-500 hover:text-gray-700">
            <FiEye className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-50 -mx-6 -mt-6 px-6 pt-6 pb-4    ">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, John!
        </h1>
        <p className="text-gray-500 mt-1">
          Here's your fulfillment overview for today. You have{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            3 jobs
          </span>{" "}
          that need your attention.
        </p>
      </div>

      {/* Alert Banner */}
      <AlertBanner
        title="Urgent Jobs Alert"
        message="You have 2 jobs due today. Please review and start processing them to avoid delays."
        variant="warning"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.label}
            value={stat.value}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Urgent Jobs Table */}
      <GenericTable
        title="Urgent Jobs"
        data={urgentJobsData}
        columns={columns}
        itemsPerPage={10}
      />
    </div>
  );
};

export default Dashboard;
