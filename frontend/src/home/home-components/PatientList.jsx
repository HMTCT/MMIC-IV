const PatientList = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[24px] p-[24px]">
      <div className="title-section flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Patient list
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Information about ICU patient
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <p className="text-black text-base font-semibold leading-[normal]">
            New patient
          </p>
          <div className="size-[40px] bg-[#EDEDED] hover:bg-[#BDBDBD] rounded-[8px] flex justify-center items-center">
            <img className="size-[32px]" src="src/assets/new.png" alt="new" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
