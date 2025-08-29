import { Layout } from './components/Layout'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { GallerySection } from './components/GallerySection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import {useEffect, useState} from "react";

export function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Layout>
            <HeroSection isLoaded={isLoaded}/>
            <AboutSection />
            <SkillsSection />
            <GallerySection />
            <ProjectsSection />
            <ContactSection />
        </Layout>
    )
}