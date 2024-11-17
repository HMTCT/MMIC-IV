const AdEventCard = ({ name, status, age, type }) => {
  return (
    <div
      className={`admission-card w-full h-[132px] bg-[#FBFBFB] flex flex-col rounded-[12px] p-[12px] gap-[12px] justify-between
        border-[2px] border-[#EDEDED] border-solid shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex items-center gap-[12px]">
        <div className="size-[40px] bg-[#EDEDED] rounded-[12px] flex justify-center items-center">
          <img
            className="size-[32px]"
            src="src/assets/patient.png"
            alt="patient"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-black text-base font-semibold leading-[normal]">
            {name}
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            {age} years
          </p>
        </div>
      </div>
      <div className="flex gap-[30%]">
        <div className="flex flex-col ">
          <p className="text-black text-base font-semibold leading-[normal]">
            Status
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            {status}
          </p>
        </div>
        <div className="flex flex-col ">
          <p className="text-black text-base font-semibold leading-[normal]">
            Type
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdEventCard;
