"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import PromptProvider from "@/context/PromptContext";
import { SessionProvider } from "next-auth/react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <PromptProvider>
        <SidebarProvider className="bg-transparent">{children}</SidebarProvider>
      </PromptProvider>
    </SessionProvider>
  );
}
