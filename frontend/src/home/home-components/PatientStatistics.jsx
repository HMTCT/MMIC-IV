import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const dataset = [
  { day: "Monday", hospital: 10, icu: 20 },
  { day: "Tuesday", hospital: 20, icu: 30 },
  { day: "Wednesday", hospital: 30, icu: 40 },
  { day: "Thursday", hospital: 40, icu: 50 },
  { day: "Friday", hospital: 50, icu: 60 },
  { day: "Saturday", hospital: 60, icu: 70 },
  { day: "Sunday", hospital: 70, icu: 80 },
];

const chartSetting = {
  yAxis: [
    {
      label: "Number of Patients",
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-12px, 0)",
    },
  },
};

const PatientStatistics = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[16px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Patient Statistics
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Weekly data
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div></div>
        <div className="w-full h-full ml-[20px]">
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            ]}
            series={[
              { dataKey: "hospital", label: "Hospital", color: "#389DB1" },
              { dataKey: "icu", label: "ICU", color: "#49B44F" },
            ]}
            // width={600}
            // height={400}
            {...chartSetting}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics;
