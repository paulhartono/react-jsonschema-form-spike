import { MainNav } from "../_components/main-nav";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container flex justify-center">
      <div className="flex min-h-screen w-full flex-col">
        <MainNav />

        <main className="flex flex-1 justify-start gap-3 pt-4">{children}</main>
        <footer className="pt-4">footer here</footer>
      </div>
    </div>
  );
}
