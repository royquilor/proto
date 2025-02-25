import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PageHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
      <div className="flex flex-1 items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-1.5">
            <h1>Heading</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                    <HelpCircle className="h-4 w-4 text-muted-foreground/50" />
                    <span className="sr-only">Page information</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is additional information about this page.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <Button size="sm">
          {/* <UploadCloud className="h-4 w-4" /> */}
          Button
        </Button>
      </div>
    </header>
  );
}
