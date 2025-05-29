interface SPAAboutSectionProps {
  onLiveSetsClick?: () => void;
}

import AboutSection from '../About/AboutSection';

export default function SPAAboutSection({ onLiveSetsClick }: SPAAboutSectionProps) {
  return <AboutSection showButton={true} onLiveSetsClick={onLiveSetsClick} />;
}
