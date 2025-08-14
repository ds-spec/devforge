import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

interface UserProps {
  name: string;
  email: string;
  avatar: string;
}

export default function UserDetails({ user }: { user: UserProps }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="active:bg-neutral-700 hover:bg-neutral-800 cursor-pointer"
            >
              <Avatar className="w-8 h-8 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-white text-sm leading-tight text-left">
                <span className="font-montserrat">{user.name}</span>
                <span>{user.email}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
