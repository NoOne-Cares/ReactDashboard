import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
    { name: "Direct", value: 300.56, id: 1 },
    { name: "Affiliate", value: 135.18, id: 2 },
    { name: "Sponsored", value: 154.02, id: 3 },
    { name: "E-mail", value: 48.96, id: 4 },
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
        <div className="w-full h-full  px-8 py-2 bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl">
            <div className="flex justify-center font-semibold text-primary-text-light dark:text-primary-text-dark">Total Sales</div>
            <div className="flex justify-center">
                <div className="w-40 h-40 ">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            {data.map((entry, index) => {
                                const valueRatio = entry.value / total;
                                const startAngle = accumulatedAngle * 360;
                                const endAngle = (accumulatedAngle + valueRatio) * 360;

                                accumulatedAngle += valueRatio;

                                return (
                                    <CustomSector
                                        key={`sector-${index}`}
                                        cx={80}
                                        cy={80}
                                        innerRadius={40}
                                        outerRadius={65}
                                        startAngle={startAngle}
                                        endAngle={endAngle}
                                        fill={COLORS[index % COLORS.length]}
                                        cornerRadiusConvex={25}
                                        cornerRadiusConcave={15}
                                    />
                                );
                            })}
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
            <div>
                {
                    data.map((item) => (
                        <div
                            key={item.name}
                            className="flex justify-between items-center px-6 pb-1 text-primary-text-light dark:text-primary-text-dark"
                            id={item.name}
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: COLORS[item.id - 1] }}
                                ></div>
                                <span>{item.name}</span>
                            </div>
                            <div>${item.value}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DonutChart;
