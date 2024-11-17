import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

import "../../styles/test.css";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const pointerLengthFactor = 0.6;

  const target = {
    x: cx + outerRadius * pointerLengthFactor * Math.sin(valueAngle),
    y: cy - outerRadius * pointerLengthFactor * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="black" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="black"
        strokeWidth={3}
      />
    </g>
  );
}

const PatientLoad = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[16px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Patient load indicator
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Daily data
          </p>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="h-[85%] w-[85%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GaugeContainer
            startAngle={-90}
            endAngle={90}
            value={40}
            valueMin={0}
            valueMax={100}
          >
            <GaugeReferenceArc
              sx={{
                fill: "#fff",
              }}
            />
            <GaugeValueArc
              sx={{
                fill: "#fff",
              }}
            />
            <GaugePointer />
          </GaugeContainer>
        </div>
        <div className="h-[85%] w-[85%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GaugeContainer
            startAngle={-90}
            endAngle={90}
            value={60}
            valueMin={0}
            valueMax={100}
          >
            <GaugeReferenceArc
              sx={{
                fill: "#FF5F5F",
              }}
            />
            <GaugeValueArc
              sx={{
                fill: "#52b202",
              }}
            />
          </GaugeContainer>
        </div>
        <div className="h-[85%] w-[85%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GaugeContainer
            startAngle={-18}
            endAngle={18}
            value={100}
            valueMin={0}
            valueMax={100}
          >
            <GaugeReferenceArc
              sx={{
                fill: "#e0e0e0",
              }}
            />
            <GaugeValueArc
              sx={{
                fill: "#F1C26B",
              }}
            />
          </GaugeContainer>
        </div>
        <div className="w-full h-full flex flex-col relative">
          <div className="flex gap-[36px] absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-black text-xs font-normal leading-[normal]">
              40%
            </p>
            <p className="text-black text-xs font-normal leading-[normal]">
              60%
            </p>
          </div>
          <div className="flex gap-[170px] absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-black text-xs font-normal leading-[normal]">
              20%
            </p>
            <p className="text-black text-xs font-normal leading-[normal]">
              80%
            </p>
          </div>
          <div className="flex gap-[210px] absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-black text-xs font-normal leading-[normal]">
              0%
            </p>
            <p className="text-black text-xs font-normal leading-[normal]">
              100%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLoad;
