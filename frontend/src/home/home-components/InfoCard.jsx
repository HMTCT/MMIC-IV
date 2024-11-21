import apiCall from "../../api/apiCall";
import { useEffect, useState } from "react";

const quantity = 1000;
const value = 10;
const year = "2200";

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

let api = {
  Patient: {
    endpoint: "/api/data/patient-count",
    query: {
      thisMonth: "",
      lastMonth: "",
    },
  },
  Staff: {
    endpoint: "/api/data/patient-count",
    query: {},
  },
  Admission: {
    endpoint: "/api/data/admission-count",
    query: {},
  },
  Discharge: {
    endpoint: "/api/data/discharge-count",
    query: {},
  },
};

const InfoCard = ({ title }) => {
  const [thisMonthCount, setThisMonthCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;

  api[title].query = {
    thisMonth: `${year}-${month}-${date}`,
    lastMonth:
      month != "12"
        ? `${year}-${month - 1}-${date}`
        : `${year - 1}-${12}-${date}`,
  };

  useEffect(() => {
    apiCall({
      endpoint: api[title].endpoint,
      method: "GET",
      query: api[title].query,
    })
      .then((data) => {
        setThisMonthCount(data.count.thisMonthCount);
        const difference =
          data.count.thisMonthCount - data.count.lastMonthCount;
        const percentage =
          (difference / data.count.lastMonthCount).toPrecision(2) * 100;
        setPercentage(percentage);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

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
        {thisMonthCount}
      </p>
      <div className="flex justify-between">
        <p className="text-black text-sm font-normal leading-[normal]">
          In this month
        </p>
        <p
          className={`${colors[title][1]} text-sm font-normal flex items-center`}
        >
          <span className="mb-1 mr-1" style={{ fontSize: "0.8em" }}>
            {percentage > 0 ? "↑" : "↓"}
          </span>
          {percentage > 0 ? percentage : -percentage} %
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
