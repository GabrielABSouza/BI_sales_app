
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    name: "Nike Air Max 270",
    category: "Sneakers",
    cost: 120,
    sellingPrice: 180,
    margin: 33.3,
    stock: 15,
    status: "Low Stock",
  },
  {
    name: "Adidas Ultraboost",
    category: "Sneakers", 
    cost: 140,
    sellingPrice: 200,
    margin: 30.0,
    stock: 8,
    status: "Critical",
  },
  {
    name: "Timberland Boots",
    category: "Boots",
    cost: 80,
    sellingPrice: 160,
    margin: 50.0,
    stock: 25,
    status: "In Stock",
  },
  {
    name: "Converse Chuck Taylor",
    category: "Sneakers",
    cost: 45,
    sellingPrice: 65,
    margin: 30.8,
    stock: 25,
    status: "In Stock",
  },
];

export function ProductMarginAnalysis() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMarginColor = (margin: number) => {
    if (margin >= 40) return 'text-green-600 bg-green-50';
    if (margin >= 25) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Product Margin Analysis</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-semibold">
                  Product <ArrowUpDown className="w-4 h-4 ml-1" />
                </Button>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Cost</TableHead>
              <TableHead className="text-right">Selling Price</TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" className="h-auto p-0 font-semibold">
                  Margin % <ArrowUpDown className="w-4 h-4 ml-1" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">${product.cost}</TableCell>
                <TableCell className="text-right">${product.sellingPrice}</TableCell>
                <TableCell className="text-right">
                  <Badge className={getMarginColor(product.margin)}>
                    {product.margin.toFixed(1)}%
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
