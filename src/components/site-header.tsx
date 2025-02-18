import { cn } from "@/lib/utils";
import VertesiaLogo from "@/assets/Vertesia-Logo.svg";
import { NavUser } from "@/components/nav-user";
interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {}

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function SiteHeader({ className, ...props }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "flex sticky top-0 z-50 w-full items-center border-b bg-background",
        className
      )}
      {...props}
    >
      <div className="flex h-14 w-full items-center justify-between gap-2 px-4">
        <img src={VertesiaLogo} alt="Vertesia Logo" className="h-5 w-auto" />
        <NavUser user={data.user} />
      </div>
    </header>
  );
}
