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
    <div
      className="chart-container mb-5 my-5"
      style={{ width: "100%", height: 382 }} // Adjusted height for the container
    >
      <h2 className="text-center mb-4">Expenses by Category</h2>
      <ResponsiveContainer
        className="rounded-lg p-4 shadow-lg bg-light"
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "8px",
              padding: "10px",
              color: "#fff",
            }}
            itemStyle={{
              color: "#fff",
            }}
          />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              fontSize: "14px",
              marginTop: "10px",
              color: "#444",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
