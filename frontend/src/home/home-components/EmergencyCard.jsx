const EmergencyCard = ({ name, status, room, time }) => {
  return (
    <div
      className={`urgent-card w-[191px] h-full bg-[#FDE8E9] flex flex-col rounded-[12px] p-[12px] gap-[16px] justify-between`}
    >
      <div className="flex items-center gap-[12px]">
        <div className="size-[40px] bg-white rounded-[16px] flex justify-center items-center">
          <img
            className="size-[32px]"
            src="src/assets/urgency.png"
            alt="urgency"
          />
        </div>
        <p className="text-black text-base font-semibold leading-[normal]">
          {name}
        </p>
      </div>
      <div className="h-full flex flex-col gap-[4px]">
        <p className="text-black text-base font-semibold leading-[normal]">
          Status
        </p>
        <p className="text-black text-sm font-normal leading-[normal]">
          {status}
        </p>
        <p className="text-black text-base font-semibold leading-[normal]">
          Admission time
        </p>
        <p className="text-black text-sm font-normal leading-[normal]">
          {time}
        </p>
      </div>
    </div>
  );
};

export default EmergencyCard;
