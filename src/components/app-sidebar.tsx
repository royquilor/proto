import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  MessageSquare,
  MessageCircle,
  Play,
  Database,
  FileType,
  PlayCircle,
  GitBranch,
  Workflow,
  Box,
  Settings2,
  ChevronRight,
  FileText,
  Image
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { OrgSwitcher } from "./org-switcher";
import { ProjectSwitcher } from "./project-switcher";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  orgs: [
    {
      name: "Acme Inc",
      plan: "Organization",
    },
    {
      name: "Acme Corp.",
      plan: "Organization",
    },
    {
      name: "Evil Corp.",
      plan: "Organization",
    },
  ],
  projects: [
    {
      name: "Project Alpha",
      status: "Project",
    },
    {
      name: "Project Beta",
      status: "Project",
    },
    {
      name: "Project Gamma",
      status: "Project",
    },
  ],
  navItems: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Tasks",
      items: [
        {
          title: "Interactions",
          url: "#",
          icon: MessageSquare,
        },
        {
          title: "Prompts",
          url: "#",
          icon: MessageCircle,
        },
        {
          title: "Runs",
          url: "#",
          icon: Play,
        },
      ]
    },
    {
      title: "Content",
      items: [
        {
          title: "Objects",
          url: "#",
          icon: Database,
          subItems: [
            {
              title: "Document part",
              url: "#",
              icon: FileText,
            },
            {
              title: "Rendition",
              url: "#",
              icon: Image,
            },
          ]
        },
        {
          title: "Types",
          url: "#",
          icon: FileType,
        },
      ]
    },
    {
      title: "Workflow",
      items: [
        {
          title: "Executions",
          url: "#",
          icon: PlayCircle,
        },
        {
          title: "Rules",
          url: "#",
          icon: GitBranch,
        },
        {
          title: "Processes",
          url: "#",
          icon: Workflow,
        },
      ]
    },
    {
      title: "Models",
      items: [
        {
          title: "Environments",
          url: "#",
          icon: Box,
        },
        {
          title: "Fine tuning",
          url: "#",
          icon: Settings2,
        },
      ]
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
      <SidebarHeader className="space-y-1">
        <OrgSwitcher teams={data.orgs} />
        <ProjectSwitcher projects={data.projects} />
      </SidebarHeader>
      <SidebarContent>
        {data.navItems.map((group) => (
          <SidebarGroup key={group.title}>
            {group.title !== "Home" && (
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            )}
            <SidebarMenu>
              {group.title === "Home" ? (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href={group.url}>
                      <Home />
                      <span>{group.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                group.items?.map((item) => (
                  <Collapsible
                    key={item.title}
                    asChild
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      {item.subItems ? (
                        <>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.subItems.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <a href={subItem.url}>
                                      <subItem.icon className="h-4 w-4" />
                                      <span>{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </>
                      ) : (
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                ))
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild>
          <a href="#">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
