import PanelNavigation from "@/components/global/panel-navigation";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PanelNavigation />
      {children}
    </>
  );
}
