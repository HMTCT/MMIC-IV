const quantity = 1000;
const days = 7;
const value = 10;

const colors = {
  Patient: ["bg-[#F4F0FE]", "text-[#9275E7]"],
  Staff: ["bg-[#EEF9FB]", "text-[#389DB1]"],
  Admission: ["bg-[#F3FDF4]", "text-[#49B44F]"],
  Discharge: ["bg-[#FFF6ED]", "text-[#E6A86B]"],
};

const images = {
  Patient: "src/assets/patient.png",
  Staff: "src/assets/staff.png",
  Admission: "src/assets/admission.png",
  Discharge: "src/assets/discharge.png",
};

const InfoCard = ({ title }) => {
  return (
    <div
      className={`info-card w-full h-full ${colors[title][0]} flex flex-col rounded-[12px] p-[12px] gap-[4px] justify-between`}
    >
      <div className="flex items-center gap-[12px]">
        <div className="size-[40px] bg-white rounded-[16px] flex justify-center items-center">
          <img className="size-[32px]" src={images[title]} alt={title} />
        </div>
        <p className="text-black text-base font-semibold leading-[normal]">
          {title}
        </p>
      </div>
      <p className="text-2xl font-semibold leading-[normal] text-black">
        {quantity}
      </p>
      <div className="flex justify-between">
        <p className="text-black text-sm font-normal leading-[normal]">
          Last {days} days
        </p>
        <p
          className={`${colors[title][1]} text-sm font-normal flex items-center`}
        >
          <span className="mb-1 mr-1" style={{ fontSize: "0.8em" }}>
            {value > 0 ? "↑" : "↓"}
          </span>
          {value} %
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
