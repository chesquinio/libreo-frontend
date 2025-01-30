import { AppSidebar } from "@/components/global/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
