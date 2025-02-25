import { InfoIcon, Copy, Check } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Example data structure organized in groups
const projectInfo = {
  user: [
    {
      label: "Organization ID",
      description: "org_123456789",
    },
    {
      label: "Project ID",
      description: "proj_987654321",
    },
    {
      label: "User ID",
      description: "user_123456789",
    },
    {
      label: "Organization Role",
      description: "Admin",
    },
    {
      label: "Project Role",
      description: "Owner",
    },
  ],
  environment: [
    {
      label: "Tenant ID",
      description: "tenant_123456789",
    },
    // {
    //   label: "Environment",
    //   description: "staging",
    // },
    {
      label: "Server",
      description: "eu-west-1",
    },
    {
      label: "Store",
      description: "store_123456789",
    },
    {
      label: "App Version",
      description: "v1.2.3",
    },
  ],
}

export function ProjectInfoTabsDropdown() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string, e: React.MouseEvent) => {
    // Prevent event propagation to keep dropdown open
    e.stopPropagation()
    await navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  // Helper function to determine if an item should have a copy button
  const shouldHaveCopyButton = (label: string) => {
    return !["Organization Role", "Project Role", "App Version"].includes(label);
  }

  // Render an info item with copy button (if applicable)
  const renderInfoItem = (item: { label: string; description: string }, id: string) => (
    <div key={item.label} className="flex items-center justify-between py-2 px-4 border-b last:border-b-0 -mx-1">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{item.label}</span>
        <span className="text-xs text-muted-foreground">
          {item.description}
        </span>
      </div>
      {shouldHaveCopyButton(item.label) && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 ml-2"
          onClick={(e) => handleCopy(item.description, id, e)}
        >
          {copiedIndex === id ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Project Information</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        alignOffset={8} 
        className="w-[300px] p-0" // Removed padding to accommodate tabs
        sideOffset={4}
      >
        <Tabs defaultValue="environment" className="w-full rounded-lg p-1">
          <TabsList className="grid w-full grid-cols-2 rounded-lg">
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="user">User</TabsTrigger>
          </TabsList>
          
          <TabsContent value="environment">
            {projectInfo.environment.map((item, index) => 
              renderInfoItem(item, `env-${index}`)
            )}
          </TabsContent>
          
          <TabsContent value="user">
            {projectInfo.user.map((item, index) => 
              renderInfoItem(item, `user-${index}`)
            )}
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 