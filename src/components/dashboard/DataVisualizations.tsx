
import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const categoryData = [
  { name: 'Sneakers', value: 45, color: '#3B82F6' },
  { name: 'Boots', value: 25, color: '#10B981' },
  { name: 'Sandals', value: 20, color: '#F59E0B' },
  { name: 'Accessories', value: 10, color: '#EF4444' },
];

export function DataVisualizations() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trends</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
