"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
const chartData = [
  { browser: "cat", value: 15, fill: "var(--color-cat)" },
  { browser: "oct", value: 11, fill: "var(--color-oct)" },
  { browser: "leave", value: 2, fill: "var(--color-leave)" },
];

const chartConfig = {
  cat: {
    label: "CAT",
    color: "hsl(var(--chart-1))",
  },
  oct: {
    label: "OCT",
    color: "hsl(var(--chart-2))",
  },
  leave: {
    label: "Leave",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function TimePieChartSample() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Time</CardTitle>
        <CardDescription>3.97 weeks remaining</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="browser"
              innerRadius={80}
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <Separator />
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          26
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <Button variant={"destructive"}>
          <Icons.add className="mr-2 h-4 w-4" /> Create Entry
        </Button>
      </CardFooter>
    </Card>
  );
}
