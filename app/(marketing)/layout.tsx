import  Header  from "@/components/layout/chocnavbar";
import  Footer  from "@/components/layout/chocofooter";
import { NavMobile } from "@/components/layout/mobile-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
