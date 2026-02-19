export type PrimaryMethod = "bank" | "paypal";

export type DayConfig = {
  label: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  start: string;
  end: string;
};

export type BusinessHoursSectionProps = {
  days: DayConfig[];
};

export type JobCapacitySectionProps = {
  autoAcceptJobs: boolean;
  setAutoAcceptJobs: (value: boolean) => void;
};

export type NotificationsSectionProps = {
  emailNewJobs: boolean;
  setEmailNewJobs: (value: boolean) => void;
  emailJobUpdates: boolean;
  setEmailJobUpdates: (value: boolean) => void;
  emailPayoutAlerts: boolean;
  setEmailPayoutAlerts: (value: boolean) => void;
  emailSystemAlerts: boolean;
  setEmailSystemAlerts: (value: boolean) => void;
  smsUrgentJobs: boolean;
  setSmsUrgentJobs: (value: boolean) => void;
  smsPayoutComplete: boolean;
  setSmsPayoutComplete: (value: boolean) => void;
};

export type PrintingCapabilitiesSectionProps = {
  sheetSize: string;
  onSheetSizeChange: (value: string) => void;
  maxResolution: string;
  onMaxResolutionChange: (value: string) => void;
  selectedInks: string[];
  onToggleInk: (ink: string) => void;
  selectedFilms: string[];
  onToggleFilm: (film: string) => void;
};

export type PaymentMethodSectionProps = {
  primaryMethod: PrimaryMethod;
  setPrimaryMethod: (value: PrimaryMethod) => void;
};
