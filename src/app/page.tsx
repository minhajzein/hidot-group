import Hero from "@/components/hero";
import HolidaysGateway from "@/components/resorts";
import BrandingGateway from "@/components/branding";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandingGateway />
      <HolidaysGateway />
      <Testimonials />
      <Blog />
    </main>
  );
}
