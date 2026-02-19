import type { DashboardStatCard, DashboardJob } from "../types/dashboard";

export const statsData: DashboardStatCard[] = [
  {
    label: "Today's Earnings",
    value: "24",
    trend: "+12%",
    trendUp: true,
  },
  {
    label: "Completed Orders",
    value: "1,847",
    trend: "+8%",
    trendUp: true,
  },
  {
    label: "Pending Orders",
    value: "382",
    trend: "32%",
    trendUp: true,
  },
  {
    label: "Total Revenue",
    value: "$45,293",
    trend: "+23%",
    trendUp: true,
  },
];

export const urgentJobsData: DashboardJob[] = [
  {
    id: "DTF-2401",
    customerName: "Sarah Johnson",
    order: "100 Custom T-Shirts",
    deadline: "Dec 13, 2:00 PM",
    status: "Urgent",
  },
  {
    id: "DTF-2402",
    customerName: "Mike Chen",
    order: "50 Hoodies",
    deadline: "Dec 13, 4:30 PM",
    status: "Urgent",
  },
  {
    id: "DTF-2403",
    customerName: "Emma Davis",
    order: "200 Tank Tops",
    deadline: "Dec 14, 10:00 AM",
    status: "Pending",
  },
  {
    id: "DTF-2404",
    customerName: "Alex Martinez",
    order: "75 Sweatshirts",
    deadline: "Dec 14, 2:00 PM",
    status: "Processing",
  },
  {
    id: "DTF-2405",
    customerName: "Lisa Thompson",
    order: "150 Polo Shirts",
    deadline: "Dec 14, 5:00 PM",
    status: "Pending",
  },
];
