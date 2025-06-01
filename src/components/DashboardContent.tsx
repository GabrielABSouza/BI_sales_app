
import React from 'react';
import { InventoryRecommendations } from './dashboard/InventoryRecommendations';
import { SupplierInsights } from './dashboard/SupplierInsights';
import { ProductMarginAnalysis } from './dashboard/ProductMarginAnalysis';
import { ActionableInsights } from './dashboard/ActionableInsights';
import { DataVisualizations } from './dashboard/DataVisualizations';

export function DashboardContent() {
  return (
    <main className="flex-1 p-6 space-y-6 overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventoryRecommendations />
        </div>
        <div className="lg:col-span-1">
          <ActionableInsights />
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <SupplierInsights />
        <DataVisualizations />
      </div>
      
      <ProductMarginAnalysis />
    </main>
  );
}
