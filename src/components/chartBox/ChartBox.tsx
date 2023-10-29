import { Link } from "react-router-dom";
import "./chartBox.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={props.chartData}
              margin={{
                top: 5,
                right: 20,
                bottom: 5,
              }}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  fontSize: "14px",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 25, y: -25 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                dot={false}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
