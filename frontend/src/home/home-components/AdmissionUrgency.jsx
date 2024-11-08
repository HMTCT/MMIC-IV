import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import ArcDesign from "./ArcDesign";

const AdmissionUrgency = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[16px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Admission urgency levels
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Daily data
          </p>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="h-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Gauge
            value={70}
            valueMin={0}
            valueMax={100}
            innerRadius="87%"
            outerRadius="100%"
            cornerRadius={20}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                display: "none",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#52b202",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#fff",
              },
            }}
          />
          <p
            className="absolute top-[8%] left-[38%] transform -translate-x-1/2 -translate-y-1/2
          text-black text-xs font-normal leading-[normal]"
          >
            Critical
          </p>
        </div>
        <div className="h-[85%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Gauge
            value={50}
            valueMin={0}
            valueMax={100}
            innerRadius="85%"
            outerRadius="100%"
            cornerRadius={20}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                display: "none",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#F1C26B",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#fff",
              },
            }}
          />
          <p
            className="absolute top-[9%] left-[29%] transform -translate-x-1/2 -translate-y-1/2
          text-black text-xs font-normal leading-[normal]"
          >
            Intermediate
          </p>
        </div>
        <div className="h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Gauge
            value={30}
            valueMin={0}
            valueMax={100}
            innerRadius="83%"
            outerRadius="100%"
            cornerRadius={20}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                display: "none",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#FF5F5F",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#fff",
              },
            }}
          />
          <p
            className="absolute top-[10%] left-[35%] transform -translate-x-1/2 -translate-y-1/2
          text-black text-xs font-normal leading-[normal]"
          >
            Standard
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionUrgency;
