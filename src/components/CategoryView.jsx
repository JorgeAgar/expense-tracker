import CustomPieChart from "./CustomPieChart";

const data = [
  { name: "Name a", value: 200, fill: "#FF0000" },
  { name: "Name b", value: 400, fill: "#00FF00" },
  { name: "Name c", value: 300, fill: "#0000FF" },
];

const CategoryView = () => {
  return <CustomPieChart data={data} />;
};

export default CategoryView;
