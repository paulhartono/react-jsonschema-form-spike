import Link from "next/link";
import { Icons } from "./icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./search-bar";

export function MainNav() {
  return (
    <header className="sticky top-0 z-40 rounded-b-lg bg-background px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">Logo</span>
          </Link>

          <nav className="flex">
            <Link href="/wba">
              <Button variant="default">Menu</Button>
            </Link>
          </nav>
        </div>

        <div>
          <div className="flex gap-3">
            <SearchBar />
            <Button variant="outline" size="icon">
              <Icons.settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
