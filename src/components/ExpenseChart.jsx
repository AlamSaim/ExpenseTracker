import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FF6B6B", // coral red
  "#FFD93D", // golden yellow
  "#6BCB77", // mint green
  "#4D96FF", // sky blue
  "#FF922B", // tangerine
  "#845EC2", // soft purple
];

const ExpenseChart = ({ data }) => {
  // Group by category and sum amounts
  const categoryTotals = data.reduce((acc, item) => {
    const category = item.category;
    const amount = parseFloat(item.amount);
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: total,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
