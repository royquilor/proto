import VertesiaLogo from "@/assets/Vertesia-Logo.svg";
import { NavUser } from "@/components/nav-user";

export function SiteHeader() {
  return (
    <header
      className="flex sticky top-0 z-50 w-full items-center border-b bg-background"
    >
      <div className="flex h-14 w-full items-center justify-between gap-2 px-4">
        <img src={VertesiaLogo} alt="Vertesia Logo" className="h-5 w-auto" />
        <NavUser />
      </div>
    </header>
  );
}
