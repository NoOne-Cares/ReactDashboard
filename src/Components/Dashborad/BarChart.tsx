import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", uv: 3000000, pv: 18000000 },
    { name: "Feb", uv: 5000000, pv: 21000000 },
    { name: "Mar", uv: 5000000, pv: 18000000 },
    { name: "Apr", uv: 6000000, pv: 22000000 },
    { name: "May", uv: 3000000, pv: 16000000 },
    { name: "Jun", uv: 4000000, pv: 21000000 },
];

const BarCharts = () => {
    return (
        <div className="w-full h-full p-6 px-8 bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl">
            <div className="font-bold text-primary-text-light dark:text-primary-text-dark">Projections vs Actuals</div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }} barSize={20}>
                    <CartesianGrid
                        vertical={false}
                        stroke="#e0e0e0"
                        strokeDasharray="0"
                    />
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
                        axisLine={false}      // <-- hides the vertical axis line
                        tickLine={false}
                    />
                    <Tooltip formatter={(value: number) => `${value / 1000000}M`} />
                    {/* <Legend /> */}
                    <Bar dataKey="pv" stackId="a" fill="#a8c5da" />
                    <Bar dataKey="uv" stackId="a" fill="#cfdfea" radius={[5, 5, 0, 0]} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;
