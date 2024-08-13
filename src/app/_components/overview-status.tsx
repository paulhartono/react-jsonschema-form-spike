import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusBar } from "./status-bar";
import { Button } from "@/components/ui/button";

export function OverviewStatus() {
  return (
    <div className="rounded-lg bg-background p-3">
      <Avatar>
        <AvatarFallback>TN</AvatarFallback>
      </Avatar>
      <div className="flex py-4">
        <div className="w-2/3">
          <h1 className="text-2xl font-medium">Trainee Name</h1>
          <StatusBar title="IT exam eligibility: 10%" value={10} />
          <div className="text-sm font-light text-gray-700">
            Lorem ipsum of key text relevant to trainee such as descriptors of
            their program.
          </div>
        </div>
      </div>
    </div>
  );
}
