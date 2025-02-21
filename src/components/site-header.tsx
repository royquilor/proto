import VertesiaLogo from "@/assets/Vertesia-Logo.svg";
import { NavUser } from "@/components/nav-user";
import { Badge } from "@/components/ui/badge";
import { ProjectInfoDropdown } from "@/components/project-info-dropdown";

export function SiteHeader() {
  return (
    <header
      className="flex sticky top-0 z-50 w-full items-center border-b bg-background"
    >
      <div className="flex h-14 w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2">
          <img src={VertesiaLogo} alt="Vertesia Logo" className="h-5 w-auto" />
          <Badge variant="outline" className="text-xs font-medium px-1 py-0.5 leading-none">staging</Badge>
          <ProjectInfoDropdown />
        </div>
        <NavUser />
      </div>
    </header>
  );
}
