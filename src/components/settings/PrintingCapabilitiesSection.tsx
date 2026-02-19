import { FiDroplet, FiPrinter } from "react-icons/fi";
import type { PrintingCapabilitiesSectionProps } from "../../types/settings";

const PrintingCapabilitiesSection = ({
  sheetSize,
  onSheetSizeChange,
  maxResolution,
  onMaxResolutionChange,
  selectedInks,
  onToggleInk,
  selectedFilms,
  onToggleFilm,
}: PrintingCapabilitiesSectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiPrinter className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Printing Capabilities
            </h2>
            <p className="text-xs text-gray-500">
              Configure your equipment specifications
            </p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="py-5 flex items-center justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-gray-700">
              Maximum Sheet Size
            </div>
            <p className="text-xs text-gray-400 mt-1">
              The largest sheet size your equipment can handle
            </p>
          </div>
          <input
            type="text"
            value={sheetSize}
            onChange={(e) => onSheetSizeChange(e.target.value)}
            className="w-40 px-3 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div className="py-5 flex items-center justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-gray-700">
              Supported Inks
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Select all ink types available on your equipment
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["CMYK", "White", "Neon", "Metallic"].map((ink) => {
              const active = selectedInks.includes(ink);
              return (
                <button
                  key={ink}
                  onClick={() => onToggleInk(ink)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    active
                      ? "border-blue-500 bg-blue-600/10 text-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-200"
                  } flex items-center gap-1`}
                >
                  {ink === "CMYK" && (
                    <FiDroplet className="w-3.5 h-3.5 text-current" />
                  )}
                  {ink}
                </button>
              );
            })}
          </div>
        </div>

        <div className="py-5 flex items-center justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-gray-700">
              Supported Films
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Select all film types you can work with
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Hot Peel", "Cold Peel", "Super Cold Peel"].map((film) => {
              const active = selectedFilms.includes(film);
              return (
                <button
                  key={film}
                  onClick={() => onToggleFilm(film)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    active
                      ? "border-blue-500 bg-blue-600/10 text-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-200"
                  }`}
                >
                  {film}
                </button>
              );
            })}
          </div>
        </div>

        <div className="py-5 flex items-center justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-gray-700">
              Maximum Resolution
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Highest print resolution your equipment supports
            </p>
          </div>
          <input
            type="text"
            value={maxResolution}
            onChange={(e) => onMaxResolutionChange(e.target.value)}
            className="w-36 px-3 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default PrintingCapabilitiesSection;
