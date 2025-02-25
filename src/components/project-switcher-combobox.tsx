"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface Project {
  name: string
  status: string
}

export function ProjectSwitcherCombobox({
  projects,
}: {
  projects: Project[]
}) {
  const [open, setOpen] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState<Project>(projects[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-xs">{activeProject.status}</span>
                <span className="truncate font-medium">
                  {activeProject.name}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </PopoverTrigger>
          <PopoverContent 
            className="w-[--radix-popover-trigger-width] min-w-56 p-0" 
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <Command>
              <CommandInput placeholder="Search projects..." />
              <CommandList className="p-1">
                <CommandEmpty>No projects found.</CommandEmpty>
                {/* <CommandGroup className="text-xs text-muted-foreground">
                  Projects
                </CommandGroup> */}
                {projects.map((project, index) => (
                  <CommandItem
                    key={project.name}
                    value={project.name}
                    onSelect={() => {
                      setActiveProject(project)
                      setOpen(false)
                    }}
                    className="gap-2 p-2"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        activeProject.name === project.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {project.name}
                    <span className="ml-auto text-xs text-muted-foreground">⌘{index + 1}</span>
                  </CommandItem>
                ))}
                <CommandSeparator className="my-1"/>
                <CommandItem 
                  className="gap-2 p-2 cursor-pointer"
                  onSelect={() => console.log("Add project")}
                >
                  <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                    <Plus className="size-4" />
                  </div>
                  <div className="font-medium text-muted-foreground">Add project</div>
                </CommandItem>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
