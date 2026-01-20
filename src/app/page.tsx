import { Header, Footer } from "@/src/components/layout";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
} from "@/src/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
