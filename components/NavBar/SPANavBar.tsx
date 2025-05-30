import styles from './NavBar.module.scss';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'events', label: 'Events' },
  { key: 'listen', label: 'Listen' },
  { key: 'livesets', label: 'Live Sets' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'booking', label: 'Booking' },
];

export default function SPANavBar({ section, setSection }: { section: string, setSection: (key: string) => void }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.desktopNav}>
        <div className={styles.links}>
          {links.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.link} ${section === key ? styles.active : ''}`}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
              onClick={() => setSection(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
