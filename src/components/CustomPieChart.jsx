import { PieChart } from "recharts";
import { Pie } from "recharts";
import { Tooltip } from "recharts";

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
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
