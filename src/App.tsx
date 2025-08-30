import {ThemeProvider} from "./context/ThemeContext.tsx";
import BackgroundAnimation from "./ui/BackgroundAnimation.tsx";
import Layout from "./Layout.tsx";
import HeroSection from "./sections/HeroSection.tsx";
import AboutSection from "./sections/AboutSection.tsx";
import ProjectsSection from "./sections/ProjectsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";

export function App() {
    return (
        <ThemeProvider>
            <div className="relative w-full min-h-screen overflow-hidden">
                <BackgroundAnimation />
                <Layout>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </Layout>
            </div>
        </ThemeProvider>
    )
}