import MeliGate from "@/components/gates/meli-gate";
import PanelNavigation from "@/components/global/panel-navigation";

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  mercadolibre: React.ReactNode;
}>) {
  return (
    <>
      <PanelNavigation />
      {children}
    </>
  );
}
