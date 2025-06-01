
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from 'lucide-react';

const recommendations = [
  {
    product: "Nike Air Max 270",
    currentStock: 15,
    recommendedStock: 45,
    trend: "up",
    reason: "High sales velocity",
  },
  {
    product: "Adidas Ultraboost",
    currentStock: 8,
    recommendedStock: 30,
    trend: "up",
    reason: "Seasonal peak approaching",
  },
  {
    product: "Converse Chuck Taylor",
    currentStock: 25,
    recommendedStock: 20,
    trend: "down",
    reason: "Declining demand",
  },
  {
    product: "Vans Old Skool",
    currentStock: 12,
    recommendedStock: 35,
    trend: "up",
    reason: "Back-to-school season",
  },
];

export function InventoryRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Smart Inventory Recommendations</h2>
        <Badge variant="secondary">AI Powered</Badge>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.product}</h3>
              <p className="text-sm text-gray-600">{item.reason}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-500">Current</p>
                <p className="font-semibold">{item.currentStock}</p>
              </div>
              
              <div className="flex items-center">
                {item.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">Recommended</p>
                <p className="font-semibold text-blue-600">{item.recommendedStock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
