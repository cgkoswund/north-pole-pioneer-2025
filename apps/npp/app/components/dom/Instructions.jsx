const Instructions = () => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-slate-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 border-b border-slate-600 pb-4">
            Instructions
          </h1>
          <div className="space-y-3 sm:space-y-4 text-gray-200 text-base sm:text-lg md:text-xl">
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">🖱️</span>
              <span>Click and drag to rotate the camera.</span>
            </p>
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">🔍</span>
              <span>Scroll to zoom in and out.</span>
            </p>
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">🔍</span>
              <span>F to toggle fullscreen.</span>
            </p>
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">⌨️</span>
              <span>
                <kbd className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-700 rounded-lg text-sm sm:text-base md:text-lg font-semibold border border-slate-600 shadow-md">
                  WASD
                </kbd>{" "}
                to move
              </span>
            </p>
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">⬆️</span>
              <span>
                <kbd className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-700 rounded-lg text-sm sm:text-base md:text-lg font-semibold border border-slate-600 shadow-md">
                  Space
                </kbd>{" "}
                to jump
              </span>
            </p>
            <p className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">↩️</span>
              <span>
                <kbd className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-700 rounded-lg text-sm sm:text-base md:text-lg font-semibold border border-slate-600 shadow-md">
                  Enter
                </kbd>{" "}
                to interact
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
