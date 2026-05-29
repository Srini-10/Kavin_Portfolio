import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/sections/01_HeroSection";
import BrandsBar from "@/components/sections/02_BrandsBar";
import BehindTheWork from "@/components/sections/03_BehindTheWork";
import ProjectsHero from "@/components/sections/04_ProjectsHero";
import BringingStories from "@/components/sections/05_BringingStories";
import CuriousSection from "@/components/sections/06_CuriousSection";
import ProcessSteps from "@/components/sections/07_ProcessSteps";
import AboutHero from "@/components/sections/08_AboutHero";
import AboutDetail from "@/components/sections/09_AboutDetail";
import ServicesSection from "@/components/sections/10_ServicesSection";
import AboutMe from "@/components/sections/11_AboutMe";
import PackagesSection from "@/components/sections/12_PackagesSection";
import SkillsSection from "@/components/sections/13_SkillsSection";
import ContactHero from "@/components/sections/14_ContactHero";
import ContactForm from "@/components/sections/15_ContactForm";
import LatestWork from "@/components/sections/16_LatestWork";
import ProjectCards from "@/components/sections/17_ProjectCards";
import FooterSection from "@/components/sections/18_Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <BrandsBar />
        <BehindTheWork />
        <ProjectsHero />
        <BringingStories />
        <CuriousSection />
        <ProcessSteps />
        <AboutHero />
        <AboutDetail />
        <ServicesSection />
        <AboutMe />
        <PackagesSection />
        <SkillsSection />
        <ContactHero />
        <ContactForm />
        <LatestWork />
        <ProjectCards />
        <FooterSection />
      </main>
    </>
  );
}
