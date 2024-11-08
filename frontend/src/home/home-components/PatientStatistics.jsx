const PatientStatistics = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[16px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Patient statistics
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Weekly data
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics;
