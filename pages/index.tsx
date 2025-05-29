import { useState } from 'react';
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
  const [section, setSection] = useState('home');

  const sections = [
    { key: 'home', label: 'Home', component: <HeroSection /> },
    { key: 'about', label: 'About', component: <SPAAboutSection onLiveSetsClick={() => setSection('livesets')} /> },
    { key: 'skills', label: 'Skills', component: <SPASkillsSection /> },
    { key: 'events', label: 'Events', component: <SPAEventsSection /> },
    { key: 'gallery', label: 'Gallery', component: <SPAGallerySection /> },
    { key: 'listen', label: 'Listen', component: <SPAListenSection /> },
    { key: 'livesets', label: 'Live Sets', component: <SPALiveSetsSection /> },
    { key: 'booking', label: 'Booking', component: <SPABookingSection /> },
  ];

  return (
    <div>
      {/* SPA NavBar and MobileMenu, only one visible at a time via CSS */}
      <div style={{ margin: '2rem 0' }}>
        <div className={navStyles.desktopNav}>
          <SPANavBar section={section} setSection={setSection} />
        </div>
        <div className={navStyles.mobileNav}>
          <SPAMobileMenu section={section} setSection={setSection} />
        </div>
      </div>
      <div style={{ minHeight: '60vh' }}>
        {sections.find(s => s.key === section)?.component}
      </div>
      <Footer />
    </div>
  );
}