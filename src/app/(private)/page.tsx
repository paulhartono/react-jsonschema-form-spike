import { api, HydrateClient } from "@/trpc/server";
import { OverviewStatus } from "../_components/overview-status";
import { DashboardTabs } from "../_components/dashboard-tabs";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="w-96 flex-none bg-background p-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div>content here...</div>
      </div>
      <div className="flex-auto">
        <div className="flex flex-col gap-3">
          <OverviewStatus />
          <DashboardTabs />
        </div>
      </div>
    </HydrateClient>
  );
}
