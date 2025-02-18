import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
export function PageHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div className="flex flex-1 items-center justify-between gap-2 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <h1>Heading</h1>
      </div>
      <Button size="sm">Upload document</Button>
    </div>
  </header>
  );
}
