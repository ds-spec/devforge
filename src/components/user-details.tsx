import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
              className="active:bg-neutral-700 hover:!bg-neutral-800 cursor-pointer"
            >
              <Avatar className="w-8 h-8 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-white text-sm leading-tight text-left">
                <span className="font-montserrat">{user.name}</span>
                <span className="text-neutral-600 tracking-tight">
                  Freemium
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56 bg-[#1f1f1f] shadow-xl shadow-white/5 backdrop-blur-lg border-none">
            <DropdownMenuLabel>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 object-cover rounded-full border border-neutral-600 flex items-center justify-center">
                  <User className="text-neutral-500" size={"0.9em"} />
                </Avatar>
                <div className="text-neutral-400 text-sm leading-tight text-left">
                  <span>{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:!bg-neutral-800 cursor-pointer">
                <LogOut className="text-neutral-500 " size={"0.9em"} />
                <span className="text-white ">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
