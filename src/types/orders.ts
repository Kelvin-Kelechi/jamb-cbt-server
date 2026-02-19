export type OrderStatus =
  | "Pending Review"
  | "In Progress"
  | "Ready"
  | "Completed";

export interface Order {
  id: string;
  customerName: string;
  isUrgent: boolean;
  hasWarning: boolean;
  thumbnail: string;
  sheetSize: string;
  filmType: string;
  dueDate: string;
  location: string;
  status: OrderStatus;
  statusDescription?: string;
}

export type OrdersTabLabel =
  | "All Jobs"
  | "Pending"
  | "In Progress"
  | "Ready"
  | "Completed"
  | "Cancelled";

export interface OrdersTab {
  label: OrdersTabLabel;
  count: number;
}
