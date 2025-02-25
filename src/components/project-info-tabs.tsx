import { Copy, Check } from "lucide-react"
import { useState } from "react"
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

export function ProjectInfoTabs() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  // Render an info item with copy button
  const renderInfoItem = (item: { label: string; description: string }, id: string) => (
    <div key={item.label} className="flex items-center justify-between py-2">
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
        onClick={() => handleCopy(item.description, id)}
      >
        {copiedIndex === id ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  )

  return (
    <Tabs defaultValue="user" className="w-full max-w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="user">User Information</TabsTrigger>
        <TabsTrigger value="environment">Environment</TabsTrigger>
      </TabsList>
      
      <TabsContent value="user" className="mt-4 space-y-1">
        <div className="rounded-md border p-4">
          {projectInfo.user.map((item, index) => 
            renderInfoItem(item, `user-${index}`)
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="environment" className="mt-4 space-y-1">
        <div className="rounded-md border p-4">
          {projectInfo.environment.map((item, index) => 
            renderInfoItem(item, `env-${index}`)
          )}
        </div>
      </TabsContent>
    </Tabs>
  )
}
