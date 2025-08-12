import { DropdownMenu } from "./ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
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
            className="text-white font-montserrat text-md"
            key={chat.name}
          >
            <SidebarMenuButton asChild>
              <a href={chat.url}>
                <span>{chat.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu></DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
