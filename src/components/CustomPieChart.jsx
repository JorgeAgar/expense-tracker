import { PieChart } from "recharts";
import { Pie } from "recharts";

const CustomPieChart = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={"100%"}
        innerRadius={"80%"}
        paddingAngle={3}
      />
    </PieChart>
  );
};

export default CustomPieChart;
