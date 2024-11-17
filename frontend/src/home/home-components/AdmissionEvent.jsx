import AdEventCard from "./AdEventCard";

const data = [
  {
    name: "Tran van H",
    age: "45",
    status: "High heart rate",
    type: "Urgent",
  },
  {
    name: "Tran van H",
    age: "45",
    status: "High heart rate",
    type: "Urgent",
  },
  {
    name: "Tran van H",
    age: "45",
    status: "High heart rate",
    type: "Urgent",
  },
];

const AdmissionEvent = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[24px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Admission Event
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Incoming ICU admission
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="size-[40px] bg-[#EDEDED] hover:bg-[#BDBDBD] rounded-[8px] flex justify-center items-center">
            <img className="size-[32px]" src="src/assets/new.png" alt="new" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] overflow-y-auto overflow-x-hidden pb-[2px]">
        {data.map((item, index) => (
          <AdEventCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AdmissionEvent;
