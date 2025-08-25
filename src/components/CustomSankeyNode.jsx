const CustomSankeyNode = ({ x, y, width, height, index, payload }) => {
    return (
    <g>
      {/* The rectangle (node itself) */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.color || "#8884d8"}
        stroke="#333"
        strokeWidth={1}
      />
      {/* Label: name (top) */}
      <text
        x={x + width + 2}
        y={y + height / 2} // slightly above center
        textAnchor="start"
        alignmentBaseline="baseline"
        fontSize={14}
        fontWeight="bold"
        fill="#000"
      >
        {payload.name}
      </text>

      {/* Label: value (bottom) */}
      <text
        x={x + width + 2}
        y={y + height / 2 + 4} // slightly below center
        textAnchor="start"
        alignmentBaseline="hanging"
        fontSize={13}
        fill="#333"
      >
        {`${payload.value}k`}
      </text>
    </g>
  );
};

export default CustomSankeyNode;