const Instructions = () => {
  return (
    <>
      <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-xs border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
          Instructions
        </h1>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <span className="text-blue-600">🖱️</span>
            <span>Click and drag to rotate the camera.</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-600">🔍</span>
            <span>Scroll to zoom in and out.</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-600">⌨️</span>
            <span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-sm font-semibold">
                WASD
              </kbd>{" "}
              to move
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-600">⬆️</span>
            <span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-sm font-semibold">
                Space
              </kbd>{" "}
              to jump
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Instructions;
