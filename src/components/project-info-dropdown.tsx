import { InfoIcon, Copy, Check } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

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
    {
      label: "Environment",
      description: "staging",
    },
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

export function ProjectInfoDropdown() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <InfoIcon className="h-4 w-4 muted-foreground" />
          <span className="sr-only">Project Information</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        alignOffset={8} 
        className="w-[240px]"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs font-medium">User Information</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {projectInfo.user.map((item, index) => (
          <DropdownMenuItem
            key={item.label}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2"
              onClick={() => handleCopy(item.description, `user-${index}`)}
            >
              {copiedIndex === `user-${index}` ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator className="my-2" />
        
        <DropdownMenuLabel className="text-xs font-medium">Environment Information</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {projectInfo.environment.map((item, index) => (
          <DropdownMenuItem
            key={item.label}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2"
              onClick={() => handleCopy(item.description, `env-${index}`)}
            >
              {copiedIndex === `env-${index}` ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
