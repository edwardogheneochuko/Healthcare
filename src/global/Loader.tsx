const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">
          🔥
        </div>
      </div>

      <p className="mt-6 text-white text-lg font-bold animate-pulse">
        Your Health Is Our Concern
      </p>
    </div>
  );
};

export default Loader;
