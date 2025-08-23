import { PieChart } from "recharts";
import { Pie } from "recharts";

const data = [
    {"name": "Name a", "value": 300, "fill": "#FF0000"},
    {"name": "Name b", "value": 300, "fill": "#00FF00"},
    {"name": "Name c", "value": 300, "fill": "#0000FF"},
]

const CategoryView = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50} />
    </PieChart>
  );
}

export default CategoryView;