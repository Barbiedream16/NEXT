import { infos } from "@/config/landing";
import Hyperfeatures from "@/components/sections/hyperfeatures";
import HeroLanding from "@/components/sections/hero-landing";
import Grid from "@/components/sections/chocgrid";
import PreviewLanding from "@/components/sections/preview-landing";
import Powered from "@/components/sections/powered";
import InfoLanding from "@/components/sections/info-landing";
import Testimonials from "@/components/sections/testimonials";
import PricingPage from "@/components/sections/chocpricing";
import Newsletter from "@/components/sections/hypernewsletter";
import FAQComponent from "@/components/sections/chocfaq";



export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <InfoLanding data={infos[0]} reverse={true} />
      {/* <InfoLanding data={infos[1]} /> */}
      <Hyperfeatures />
      <PricingPage />
      <Grid />
      <Testimonials />
      <FAQComponent />
      <Newsletter />
    </>
  );
}
