const Divider = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1320px] items-center gap-1.5">
        <span className="block h-[2px] w-6 shrink-0 bg-[#c88a2d]" />
        <span className="block h-[2px] flex-1 bg-[#e7e4df]" />
        <span className="block h-[2px] w-6 shrink-0 bg-[#c88a2d]" />
      </div>
    </div>
  );
};

export default Divider;