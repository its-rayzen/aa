import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeroSection from '../components/Hero/HeroSection';
import SPAAboutSection from '../components/Sections/AboutSection';
import SPABookingSection from '../components/Sections/BookingSection';
import SPAEventsSection from '../components/Sections/EventsSection';
import SPAGallerySection from '../components/Sections/GallerySection';
import SPAListenSection from '../components/Sections/ListenSection';
import SPALiveSetsSection from '../components/Sections/LiveSetsSection';
import SPASkillsSection from '../components/Sections/SkillsSection';
import SPANavBar from '../components/NavBar/SPANavBar';
import SPAMobileMenu from '../components/NavBar/SPAMobileMenu';

import Footer from '../components/Footer/Footer';
import navStyles from '../components/NavBar/NavBar.module.scss';


export default function SPAApp() {
  const router = useRouter();
  const [section, setSection] = useState('home');

  // Clean URL on load - remove any query parameters to maintain pure SPA
  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      router.replace('/', undefined, { shallow: true });
    }
  }, [router]);

  // Reset scroll position when section changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [section]);

  // Simple section change without URL updates
  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  const sections = [
    { key: 'home', label: 'Home', component: <HeroSection /> },
    { key: 'events', label: 'Events', component: <SPAEventsSection /> },
    { key: 'listen', label: 'Listen', component: <SPAListenSection /> },
    { key: 'livesets', label: 'Live Sets', component: <SPALiveSetsSection /> },
    { key: 'gallery', label: 'Gallery', component: <SPAGallerySection /> },
    { key: 'about', label: 'About', component: <SPAAboutSection onLiveSetsClick={() => handleSectionChange('livesets')} /> },
    { key: 'skills', label: 'Skills', component: <SPASkillsSection /> },
    { key: 'booking', label: 'Booking', component: <SPABookingSection /> },
  ];

  return (
    <div>
      {/* SPA NavBar and MobileMenu, only one visible at a time via CSS */}
      <div style={{ margin: '2rem 0' }}>
        <div className={navStyles.desktopNav}>
          <SPANavBar section={section} setSection={handleSectionChange} />
        </div>
        <div className={navStyles.mobileNav}>
          <SPAMobileMenu section={section} setSection={handleSectionChange} />
        </div>
      </div>
      <div style={{ minHeight: '60vh' }}>
        {sections.find(s => s.key === section)?.component}
      </div>
      <Footer />
    </div>
  );
}