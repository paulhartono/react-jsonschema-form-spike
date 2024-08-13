import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const data = [
  { id: 0, label: "CAT", value: 20 },
  { id: 1, label: "OCT", value: 12 },
  { id: 2, label: "Leave", value: 2 },
];

export function DashboardWidget() {
  return (
    <Card>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
