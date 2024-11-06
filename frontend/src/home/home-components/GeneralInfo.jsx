import InfoCard from "./InfoCard";

const GeneralInfo = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col justify-between gap-[24px] p-[24px]">
      <div className="flex h-full gap-[24px]">
        <div className="basis-1/2">
          <InfoCard title="Patient" />
        </div>
        <div className="basis-1/2">
          <InfoCard title="Staff" />
        </div>
      </div>
      <div className="flex h-full gap-[24px]">
        <div className="basis-1/2">
          <InfoCard title="Admission" />
        </div>
        <div className="basis-1/2">
          <InfoCard title="Discharge" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
