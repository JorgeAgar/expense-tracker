import { PieChart, Pie, Tooltip } from "recharts";
import { Movement } from "./Movement";

const CustomTooltip = ({ active, payload }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {isVisible && (
        <Movement name={payload[0].name} value={payload[0].value} />
      )}
    </div>
  );
};

const CustomPieChart = ({ data }) => {
  return (
    <PieChart width={400} height={400} >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={"100%"}
        innerRadius={"50%"}
      />
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};

export default CustomPieChart;
