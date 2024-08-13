import React from "react";
import { DashboardWidget } from "./dashboard-widget";
import { TimePieChartSample } from "./time-pie-chart-sample";

export function DashboardTabIT() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-2">
        <TimePieChartSample />
        <DashboardWidget />
        <DashboardWidget />
      </div>
    </div>
  );
}
