
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign } from 'lucide-react';

const suppliers = [
  {
    name: "SportsDirect Inc.",
    rating: 4.8,
    deliveryTime: "2-3 days",
    priceRating: "Low",
    products: 125,
    recommended: true,
  },
  {
    name: "Athletic Supply Co.",
    rating: 4.6,
    deliveryTime: "3-5 days", 
    priceRating: "Medium",
    products: 89,
    recommended: false,
  },
  {
    name: "Premium Sports Ltd.",
    rating: 4.9,
    deliveryTime: "1-2 days",
    priceRating: "High",
    products: 67,
    recommended: false,
  },
];

export function SupplierInsights() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Supplier Insights</h2>
      
      <div className="space-y-4">
        {suppliers.map((supplier, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">{supplier.name}</h3>
              {supplier.recommended && (
                <Badge className="bg-green-100 text-green-800">Recommended</Badge>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{supplier.rating} rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{supplier.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span>{supplier.priceRating} price</span>
              </div>
              <div className="text-gray-600">
                {supplier.products} products
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
