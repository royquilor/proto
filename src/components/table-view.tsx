import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sparkles, ChevronDown, MoreHorizontal, Plus, Download } from "lucide-react"

// Sample data for the table
const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", status: "Active", lastActive: "2023-05-01" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    status: "Inactive",
    lastActive: "2023-04-28",
  },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "Active", lastActive: "2023-05-02" },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Developer",
    status: "Active",
    lastActive: "2023-05-01",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Designer",
    status: "Inactive",
    lastActive: "2023-04-30",
  },
  { id: 6, name: "Emma Wilson", email: "emma@example.com", role: "Product Manager", status: "Active", lastActive: "2023-05-03" },
  { id: 7, name: "Michael Chen", email: "michael@example.com", role: "Developer", status: "Active", lastActive: "2023-05-02" },
  { id: 8, name: "Sarah Jones", email: "sarah@example.com", role: "Designer", status: "Active", lastActive: "2023-05-01" },
  { id: 9, name: "David Kim", email: "david@example.com", role: "Developer", status: "Inactive", lastActive: "2023-04-29" },
  { id: 10, name: "Lisa Garcia", email: "lisa@example.com", role: "Manager", status: "Active", lastActive: "2023-05-02" },
  { id: 11, name: "Tom Anderson", email: "tom@example.com", role: "Designer", status: "Active", lastActive: "2023-05-01" },
  { id: 12, name: "Rachel Lee", email: "rachel@example.com", role: "Developer", status: "Inactive", lastActive: "2023-04-28" },
  { id: 13, name: "James Wilson", email: "james@example.com", role: "Product Manager", status: "Active", lastActive: "2023-05-03" },
  { id: 14, name: "Maria Rodriguez", email: "maria@example.com", role: "Designer", status: "Active", lastActive: "2023-05-02" },
  { id: 15, name: "Alex Thompson", email: "alex@example.com", role: "Developer", status: "Active", lastActive: "2023-05-01" },
  { id: 16, name: "Sophie Martin", email: "sophie@example.com", role: "UX Researcher", status: "Active", lastActive: "2023-05-03" },
  { id: 17, name: "Ryan Parker", email: "ryan@example.com", role: "Developer", status: "Active", lastActive: "2023-05-02" },
  { id: 18, name: "Nina Patel", email: "nina@example.com", role: "Product Manager", status: "Inactive", lastActive: "2023-04-29" },
  { id: 19, name: "Kevin Zhang", email: "kevin@example.com", role: "Designer", status: "Active", lastActive: "2023-05-01" },
  { id: 20, name: "Laura White", email: "laura@example.com", role: "Developer", status: "Active", lastActive: "2023-05-03" }
]

export function TableView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAISearch, setIsAISearch] = useState(false)
  const [filterOption, setFilterOption] = useState("All")
  const [sortOption, setSortOption] = useState("Name")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const toggleAISearch = () => {
    setIsAISearch(!isAISearch)
    setSearchTerm("")
  }

  const filteredData = data.filter((item) => {
    if (filterOption !== "All" && item.status !== filterOption) return false
    if (searchTerm === "") return true
    return Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOption === "Name") return a.name.localeCompare(b.name)
    if (sortOption === "Role") return a.role.localeCompare(b.role)
    if (sortOption === "Status") return a.status.localeCompare(b.status)
    return 0
  })

  return (
    <div className="p-4">

      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-64">
          <Input
            type="text"
            placeholder={isAISearch ? "Ask anything..." : "Search..."}
            value={searchTerm}
            onChange={handleSearch}
            className="pr-10"
          />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={toggleAISearch}>
            <Sparkles className={`h-4 w-4 ${isAISearch ? "text-primary" : "text-muted-foreground"}`} />
          </Button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilterOption("All")}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterOption("Active")}>Active</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterOption("Inactive")}>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setSortOption("Name")}>Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("Role")}>Role</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("Status")}>Status</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.lastActive}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => console.log("Edit", item.id)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => console.log("Delete", item.id)}>Delete</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => console.log("Duplicate", item.id)}>Duplicate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

