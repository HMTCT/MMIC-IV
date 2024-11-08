import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { Box, Typography } from "@mui/material";

const ArcDesign = () => {
  const gauges = [
    {
      value: 90,
      color: "#52b202",
      label: "Critical",
      innerRadius: "60%",
      outerRadius: "70%",
    },
    {
      value: 70,
      color: "#f0b429",
      label: "Intermediate",
      innerRadius: "45%",
      outerRadius: "55%",
    },
    {
      value: 50,
      color: "#e84a5f",
      label: "Standard",
      innerRadius: "30%",
      outerRadius: "40%",
    },
  ];

  return (
    <Box position="relative" width={200} height={200}>
      {gauges.map((gauge, index) => (
        <Gauge
          key={index}
          value={gauge.value}
          startAngle={-90}
          endAngle={90}
          innerRadius={gauge.innerRadius}
          outerRadius={gauge.outerRadius}
          cornerRadius="50%"
          sx={{
            [`& .${gaugeClasses.valueArc}`]: {
              fill: gauge.color,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: "#e0e0e0", // Color of the non-filled part
            },
          }}
        />
      ))}

      {/* Labels with more spacing */}
      <Box
        position="absolute"
        top="20%"
        left="60%"
        display="flex"
        flexDirection="column"
        gap={1}
      >
        {gauges.map((gauge, index) => (
          <Typography
            key={index}
            variant="body2"
            fontWeight="bold"
            style={{ color: gauge.color }}
          >
            {gauge.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ArcDesign;
