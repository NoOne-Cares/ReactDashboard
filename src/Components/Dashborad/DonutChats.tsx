import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
    { name: "Direct", value: 300.56 },
    { name: "Affiliate", value: 135.18 },
    { name: "Sponsored", value: 154.02 },
    { name: "E-mail", value: 48.96 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const createCustomSectorPath = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    cornerRadiusConvex = 10,
    cornerRadiusConcave = 10,
}) => {
    const startAngleRad = (startAngle - 90) * RADIAN;
    const endAngleRad = (endAngle - 90) * RADIAN;

    const outerStartX = cx + outerRadius * Math.cos(startAngleRad);
    const outerStartY = cy + outerRadius * Math.sin(startAngleRad);

    const outerEndX = cx + outerRadius * Math.cos(endAngleRad);
    const outerEndY = cy + outerRadius * Math.sin(endAngleRad);

    const innerStartX = cx + innerRadius * Math.cos(endAngleRad);
    const innerStartY = cy + innerRadius * Math.sin(endAngleRad);

    const innerEndX = cx + innerRadius * Math.cos(startAngleRad);
    const innerEndY = cy + innerRadius * Math.sin(startAngleRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
    M ${cx + (outerRadius - cornerRadiusConvex) * Math.cos(startAngleRad)} ${cy + (outerRadius - cornerRadiusConvex) * Math.sin(startAngleRad)}
    A ${cornerRadiusConvex} ${cornerRadiusConvex} 0 0 1 ${outerStartX} ${outerStartY}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
    A ${cornerRadiusConcave} ${cornerRadiusConcave} 0 0 0 ${innerStartX} ${innerStartY}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}
    A ${cornerRadiusConvex} ${cornerRadiusConvex} 0 0 1 ${cx + (outerRadius - cornerRadiusConvex) * Math.cos(startAngleRad)} ${cy + (outerRadius - cornerRadiusConvex) * Math.sin(startAngleRad)}
    Z
  `;
};

const CustomSector = (props) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        cornerRadiusConvex = 15,
        cornerRadiusConcave = 15,
        ...rest
    } = props;

    const path = createCustomSectorPath({
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        cornerRadiusConvex,
        cornerRadiusConcave,
    });

    return <path d={path} fill={fill} {...rest} />;
};

const DonutChart = () => {
    // total value to calculate angles
    const total = data.reduce((acc, cur) => acc + cur.value, 0);

    let accumulatedAngle = 0;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                {data.map((entry, index) => {
                    const valueRatio = entry.value / total;
                    const startAngle = accumulatedAngle * 360;
                    const endAngle = (accumulatedAngle + valueRatio) * 360;

                    accumulatedAngle += valueRatio;

                    return (
                        <CustomSector
                            key={`sector-${index}`}
                            cx={200}
                            cy={200}
                            innerRadius={70}
                            outerRadius={100}
                            startAngle={startAngle}
                            endAngle={endAngle}
                            fill={COLORS[index % COLORS.length]}
                            cornerRadiusConvex={15}
                            cornerRadiusConcave={15}
                        />
                    );
                })}
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DonutChart;
