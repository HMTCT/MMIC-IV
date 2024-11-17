import EmergencyCard from "./EmergencyCard";

const cases = 2;

const data = [
  {
    name: "Nguyen Thi B",
    status: "High heart rate",
    room: "123",
    time: "05:00 18/07/2024",
  },
  {
    name: "Nguyen Thi B",
    status: "High heart rate",
    room: "123",
    time: "05:00 18/07/2024",
  },
  {
    name: "Nguyen Thi B",
    status: "High heart rate",
    room: "123",
    time: "05:00 18/07/2024",
  },
];

const EmergencyCases = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col justify-between gap-[24px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center gap-[12px]">
        <div className="w-[40px] h-[40px] bg-[#EDEDED] rounded-[8px] flex justify-center items-center">
          <img
            className="w-[32px] h-[32px]"
            src={cases > 0 ? "src/assets/noti1.png" : "src/assets/noti.png"}
            alt="noti"
          />
        </div>
        <p className="text-black text-xl font-semibold leading-[normal]">
          Emergency Cases
        </p>
      </div>
      <div className="flex gap-[24px] overflow-x-auto overflow-y-hidden max-w-full whitespace-nowrap">
        {data.map((item, index) => (
          <EmergencyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default EmergencyCases;
