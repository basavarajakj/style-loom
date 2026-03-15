import StatsCard from "@/components/base/vendors/stats-card";
import CustomerInsights from "@/components/containers/vendors/shop/customer-insights";
import RecentOrders from "@/components/containers/vendors/shop/recent-orders";
import SalesOverview from "@/components/containers/vendors/shop/sales-overview";
import TopProducts from "@/components/containers/vendors/shop/top-products";
import type { LucideIcon } from "lucide-react";

interface ShopDashboardTemplateProps {
  shopName: string;
  stats: Array<{
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
    trend: "up" | "down" | "neutral";
  }>;
}

export default function ShopDashboardTemplate({
  shopName,
  stats,
}: ShopDashboardTemplateProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-3xl">Shop Overview</h2>
        <p className="text-muted-foreground">
          Monitor your shop's performance and key metrics
        </p>
      </div>

      <div className="grid gap-3 lg:gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            Icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid gap-3 lg:gap-4 @2xl:grid-cols-2 @3xl:grid-cols-7">
        <SalesOverview className="@3xl:col-span-4" shopName={shopName} />
        <RecentOrders className="@3xl:col-span-3" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TopProducts />
        <CustomerInsights />
      </div>
    </div>
  );
}