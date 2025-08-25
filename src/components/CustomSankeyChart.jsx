import { Sankey, Tooltip } from "recharts";

const CustomSankeyChart = ({ data }) => {
  return (
    <Sankey
      width={960}
      height={500}
      data={data}
      node={{stroke: "#77c878", strokeWidth: 2}}
      nodePadding={50}
      margin={{
        left: 200,
        right: 200,
        top: 100,
        bottom: 100,
      }}
      link={{ stroke: "#77c878" }}
    >
      <Tooltip />
    </Sankey>
  );
};

export default CustomSankeyChart;
