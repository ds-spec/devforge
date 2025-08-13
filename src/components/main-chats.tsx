import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

interface Chats {
  name: string;
  url: string;
}

export default function MainChats({ chats }: { chats: Chats[] }) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-neutral-500 font-montserrat font-semibold text-md">
        Chats
      </SidebarGroupLabel>
      <SidebarMenu>
        {chats?.map((chat) => (
          <SidebarMenuItem
            className="text-white font-montserrat text-md "
            key={chat.name}
          >
            <SidebarMenuButton
              className="active:bg-neutral-700 active:text-white hover:bg-neutral-800 hover:text-white"
              asChild
            >
              <a href={chat.url}>
                <span>{chat.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="hover:bg-transparent cursor-pointer"
                asChild
              >
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal className="hover:bg-transparent text-white" />
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-neutral-900 text-white border-none  rounded-lg">
                <DropdownMenuItem className="hover:bg-neutral-800">
                  <span>Rename</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
