import { Progress } from "@/components/ui/progress";

interface StatusBarProps {
  title: string;
  value: number;
}
export function StatusBar(props: StatusBarProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h4 className="text-sm font-light">{props.title}</h4>
      <Progress value={props.value} className="h-2" />
    </div>
  );
}
