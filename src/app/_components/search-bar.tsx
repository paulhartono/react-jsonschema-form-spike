import { Input } from "@/components/ui/input";
import { Icons } from "./icons";

export function SearchBar() {
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
}
