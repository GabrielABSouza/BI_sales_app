
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Calendar } from 'lucide-react';

const insights = [
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Low Stock Alert",
    message: "5 products below minimum threshold",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    type: "recommendation",
    icon: TrendingDown,
    title: "Discontinue Products",
    message: "3 items with poor performance",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    type: "trend",
    icon: Calendar,
    title: "Seasonal Trend",
    message: "Winter boots demand rising",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
];

export function ActionableInsights() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Actionable Insights</h2>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className={`p-4 rounded-lg ${insight.bgColor}`}>
            <div className="flex items-start gap-3">
              <insight.icon className={`w-5 h-5 mt-0.5 ${insight.color}`} />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.message}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                New
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
