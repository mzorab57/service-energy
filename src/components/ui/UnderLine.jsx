const UnderLine = () => {
  return (
    <div className="flex items-center justify-center mt-8 gap-4">
      <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-blue-500"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-blue-500"></div>
    </div>
  );
};

export default UnderLine;
