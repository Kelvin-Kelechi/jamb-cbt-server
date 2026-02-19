export const GangsheetPreview = () => {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3">
        Gangsheet Preview
      </h3>
      <div className="w-full h-[350px] border border-gray-200 rounded-xl p-8 flex items-center justify-center bg-gray-50">
        <div className="w-[80%] h-full bg-white border border-gray-200 shadow-sm relative overflow-hidden">
          {/* Transparency Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          />

          {/* Content Preview (Dummy Rockets) */}
          <div className="absolute inset-0 p-8 grid grid-cols-4 gap-4 content-start">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="text-4xl text-center">
                🚀
              </div>
            ))}
          </div>

          {/* Crop Box Line (Red) */}
          <div className="absolute inset-4 border border-red-200 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
