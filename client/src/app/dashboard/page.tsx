"use client";

import { Package, TrendingUp, TrendingDown, CheckCircle, Tag } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
   <CardPopularProducts />
   <CardSalesSummary />
   <CardPurchaseSummary />
   <CardExpenseSummary />
   <StatCard 
     title="Customer & Expenses"
     primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
     dateRange="22 - 29 October 2023"
     details={[
      {
         title: "Cutomer Growth", 
         amount: "175.00",
         changePercentage: 131,
         IconComponent: TrendingUp,
      },
      {
        title: "Expenses", 
        amount: "10.00",
        changePercentage: -56,
        IconComponent: TrendingDown,
     },
     ]}
    />
    <StatCard 
     title="Dues & Pending Orders"
     primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
     dateRange="22 - 29 October 2023"
     details={[
      {
         title: "Dues", 
         amount: "255.00",
         changePercentage: 131,
         IconComponent: TrendingUp,
      },
      {
        title: "Pending Orders", 
        amount: "147.00",
        changePercentage: -56,
        IconComponent: TrendingDown,
     },
     ]}
    />
    <StatCard 
     title="Sales & Discount"
     primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
     dateRange="22 - 29 October 2023"
     details={[
      {
         title: "Sales", 
         amount: "1000.00",
         changePercentage: 20,
         IconComponent: TrendingUp,
      },
      {
        title: "Discount", 
        amount: "200.00",
        changePercentage: -10,
        IconComponent: TrendingDown,
     },
     ]}
    />
  </div>
  );
};

export default Dashboard;