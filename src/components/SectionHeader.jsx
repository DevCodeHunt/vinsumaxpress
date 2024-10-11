const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-1">
      <h1 className="sm:text-4xl text-3xl font-bold text-center">{title}</h1>
      <h2 className="sm:text-3xl text-2xl font-semibold opacity-40 text-center">{subTitle}</h2>
    </div>
  );
};

export default SectionHeader;
