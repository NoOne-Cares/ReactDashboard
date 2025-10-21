import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { isDark } from "../../store/store";
import { useAtomValue } from "jotai";

const data = [
    { name: "Jan", uv: 13000000, uv2: null, pv: 10000000 },
    { name: "Feb", uv: 10000000, uv2: null, pv: 19000000 },
    { name: "Mar", uv: 11000000, uv2: null, pv: 15000000 },  // Split point (solid ends here)
    { name: "Apr", uv: 18000000, uv2: 18000000, pv: 12000000 },  // Dotted starts here
    { name: "May", uv: null, uv2: 20000000, pv: 16000000 },
    { name: "Jun", uv: null, uv2: 21000000, pv: 26000000 },
];

const LineCharts = () => {
    const isThemedark = useAtomValue(isDark)
    const strokeColor1 = isThemedark ? '#c6c7f8' : '#1c1c1c';
    const strokeColour2 = isThemedark ? '#a8c5da' : '#a8c5da'
    return (
        <div className="w-full h-full sm:p-8 sm:px-10 p-6 pb-15 sm:pb-6s bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl">
            <div className="flex sm:gap-8 gap-6 text-primary-text-light dark:text-primary-text-dark">
                <div className="font-bold">Revenue  </div>
                <span className="hidden sm:block">|</span>
                <div className="flex gap-2 items-center">
                    <div className="hidden sm:block w-2 h-2 rounded-full bg-black dark:bg-[#b2b3de]"></div>
                    <div>Current Week <span className="font-bold"> $58,211</span></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#a8c5da] hidden sm:block"></div>
                    <div>Previous Week <span className="font-bold">$68,768</span></div>

                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                >
                    <CartesianGrid vertical={false} stroke="#e0e0e0" strokeDasharray="0" />
                    <XAxis dataKey="name" tickLine={false} />

                    <YAxis
                        type="number"
                        domain={[0, 30000000]}
                        ticks={[10000000, 20000000, 30000000]}
                        tickFormatter={(value) => `${value / 1000000}M`}
                        scale="linear"
                        allowDecimals={false}
                        allowDataOverflow={true}
                        tickCount={3}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip formatter={(value: number) => `${value / 1000000}M`} />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke={strokeColor1}
                        strokeWidth={3}
                        dot={false}
                        isAnimationActive={false}
                        connectNulls={true}
                    />

                    <Line
                        type="monotone"
                        dataKey="uv2"
                        stroke={strokeColor1}
                        strokeWidth={3}
                        strokeDasharray="4 4"
                        dot={false}
                        isAnimationActive={false}
                        connectNulls={true}
                    />

                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke={strokeColour2}
                        strokeWidth={3}
                        dot={false}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineCharts;
