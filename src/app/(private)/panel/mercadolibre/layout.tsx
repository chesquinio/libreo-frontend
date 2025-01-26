import MeliGate from "@/components/gates/meli-gate";

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  mercadolibre: React.ReactNode;
}>) {
  return <MeliGate>{children}</MeliGate>;
}
