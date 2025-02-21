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
} from "@/components/ui/sidebar";
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
};

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
];

// New data structures for additional groups
const taskItems = [
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
];

const contentItems = [
  {
    title: "Objects",
    url: "#",
    icon: Database,
  },
  {
    title: "Types",
    url: "#",
    icon: FileType,
  },
];

const workflowItems = [
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
];

const modelItems = [
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
];

export function AppSidebar() {
  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
      <SidebarHeader className="space-y-1">
        <OrgSwitcher teams={data.orgs} />
        <ProjectSwitcher projects={data.projects} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tasks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {taskItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Workflow</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workflowItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modelItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
