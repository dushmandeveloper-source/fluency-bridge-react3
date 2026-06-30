import BannerBackground from '../components/BannerBackground';
import Hero2 from '../components/Hero2';
import Programs2 from '../components/Programs2';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PartnerInstitutions from '../components/PartnerInstitutions';
import CTABanner from '../components/CTABanner';

export default function Home2() {
  return (
    <>
      {/* zoomOrigin="bottom center" keeps the banner's bottom edge fixed under the
          floating stats card while it zooms, instead of drifting and exposing a
          shifting sliver of photo beneath the card. */}
      <BannerBackground zoomOrigin="bottom center">
        <Hero2 />
        <Programs2 />
      </BannerBackground>

      <StatsBar />
      <WhyChooseUs />
      <Testimonials />
      <PartnerInstitutions />
      <CTABanner />
    </>
  );
}
