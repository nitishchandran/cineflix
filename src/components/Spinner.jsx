const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10" role="status">
      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
