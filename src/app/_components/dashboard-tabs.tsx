import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DashboardTabIT } from "./dashboard-tab-it";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="it">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="it">Initial Training</TabsTrigger>
        <TabsTrigger value="bt">Basic Training</TabsTrigger>
        <TabsTrigger value="at">Advanced Training</TabsTrigger>
        <TabsTrigger value="pft">PF Training</TabsTrigger>
        <TabsTrigger value="all">All Training</TabsTrigger>
      </TabsList>
      <TabsContent value="it">
        <DashboardTabIT />
      </TabsContent>
      <TabsContent value="bt">bt</TabsContent>
      <TabsContent value="at">at</TabsContent>
      <TabsContent value="pft">pft</TabsContent>
      <TabsContent value="all">all</TabsContent>
    </Tabs>
  );
}
