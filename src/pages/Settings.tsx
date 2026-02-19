import { useState } from "react";
import SettingsHeader from "../components/settings/SettingsHeader";
import PrintingCapabilitiesSection from "../components/settings/PrintingCapabilitiesSection";
import BusinessHoursSection from "../components/settings/BusinessHoursSection";
import JobCapacitySection from "../components/settings/JobCapacitySection";
import NotificationsSection from "../components/settings/NotificationsSection";
import PaymentMethodSection from "../components/settings/PaymentMethodSection";
import type { PrimaryMethod } from "../types/settings";

const Settings = () => {
  const [autoAcceptJobs, setAutoAcceptJobs] = useState(true);
  const [mondayEnabled, setMondayEnabled] = useState(true);
  const [tuesdayEnabled, setTuesdayEnabled] = useState(true);
  const [wednesdayEnabled, setWednesdayEnabled] = useState(false);
  const [thursdayEnabled, setThursdayEnabled] = useState(false);
  const [fridayEnabled, setFridayEnabled] = useState(false);
  const [saturdayEnabled, setSaturdayEnabled] = useState(false);
  const [sundayEnabled, setSundayEnabled] = useState(false);
  const [emailNewJobs, setEmailNewJobs] = useState(true);
  const [emailJobUpdates, setEmailJobUpdates] = useState(true);
  const [emailPayoutAlerts, setEmailPayoutAlerts] = useState(true);
  const [emailSystemAlerts, setEmailSystemAlerts] = useState(true);
  const [smsUrgentJobs, setSmsUrgentJobs] = useState(true);
  const [smsPayoutComplete, setSmsPayoutComplete] = useState(false);
  const [primaryMethod, setPrimaryMethod] = useState<PrimaryMethod>("bank");

  const [sheetSize, setSheetSize] = useState("");
  const [maxResolution, setMaxResolution] = useState("");
  const [selectedInks, setSelectedInks] = useState<string[]>([]);
  const [selectedFilms, setSelectedFilms] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-8">
      <SettingsHeader />

      <div className="space-y-8">
        <PrintingCapabilitiesSection
          sheetSize={sheetSize}
          onSheetSizeChange={setSheetSize}
          maxResolution={maxResolution}
          onMaxResolutionChange={setMaxResolution}
          selectedInks={selectedInks}
          onToggleInk={(ink) =>
            setSelectedInks((prev) =>
              prev.includes(ink)
                ? prev.filter((i) => i !== ink)
                : [...prev, ink],
            )
          }
          selectedFilms={selectedFilms}
          onToggleFilm={(film) =>
            setSelectedFilms((prev) =>
              prev.includes(film)
                ? prev.filter((f) => f !== film)
                : [...prev, film],
            )
          }
        />

        <BusinessHoursSection
          days={[
            {
              label: "Monday",
              enabled: mondayEnabled,
              setEnabled: setMondayEnabled,
              start: "9:00am",
              end: "6:00pm",
            },
            {
              label: "Tuesday",
              enabled: tuesdayEnabled,
              setEnabled: setTuesdayEnabled,
              start: "9:00am",
              end: "",
            },
            {
              label: "Wednesday",
              enabled: wednesdayEnabled,
              setEnabled: setWednesdayEnabled,
              start: "",
              end: "",
            },
            {
              label: "Thursday",
              enabled: thursdayEnabled,
              setEnabled: setThursdayEnabled,
              start: "",
              end: "",
            },
            {
              label: "Friday",
              enabled: fridayEnabled,
              setEnabled: setFridayEnabled,
              start: "",
              end: "",
            },
            {
              label: "Saturday",
              enabled: saturdayEnabled,
              setEnabled: setSaturdayEnabled,
              start: "",
              end: "",
            },
            {
              label: "Sunday",
              enabled: sundayEnabled,
              setEnabled: setSundayEnabled,
              start: "",
              end: "",
            },
          ]}
        />

        <JobCapacitySection
          autoAcceptJobs={autoAcceptJobs}
          setAutoAcceptJobs={setAutoAcceptJobs}
        />

        <NotificationsSection
          emailNewJobs={emailNewJobs}
          setEmailNewJobs={setEmailNewJobs}
          emailJobUpdates={emailJobUpdates}
          setEmailJobUpdates={setEmailJobUpdates}
          emailPayoutAlerts={emailPayoutAlerts}
          setEmailPayoutAlerts={setEmailPayoutAlerts}
          emailSystemAlerts={emailSystemAlerts}
          setEmailSystemAlerts={setEmailSystemAlerts}
          smsUrgentJobs={smsUrgentJobs}
          setSmsUrgentJobs={setSmsUrgentJobs}
          smsPayoutComplete={smsPayoutComplete}
          setSmsPayoutComplete={setSmsPayoutComplete}
        />

        <PaymentMethodSection
          primaryMethod={primaryMethod}
          setPrimaryMethod={setPrimaryMethod}
        />
      </div>
    </div>
  );
};

export default Settings;
