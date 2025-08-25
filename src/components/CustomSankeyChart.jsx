import { Sankey, Tooltip } from "recharts";
import CustomSankeyNode from "./CustomSankeyNode";

const CustomSankeyChart = ({ data }) => {
  return (
    <Sankey
      width={960}
      height={500}
      data={data}
      node={<CustomSankeyNode />}
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
