import { useState } from 'react';
import styles from './NavBar.module.scss';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'events', label: 'Events' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'listen', label: 'Listen' },
  { key: 'livesets', label: 'Live Sets' },
  { key: 'booking', label: 'Booking' },
];

export default function SPAMobileMenu({ section, setSection }: { section: string, setSection: (key: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileMenuWrapper}>
      <button
        className={styles.menuButton}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className={styles.menuLogo}>MENU</span>
      </button>
      {open && (
        <div className={styles.menuOverlay} onClick={() => setOpen(false)}>
          <nav
            className={styles.menuNav}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={styles.menuClose}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <ul className={styles.menuList}>
              {links.map(({ key, label }) => (
                <li key={key}>
                  <button
                    className={styles.menuLink}
                    style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
                    onClick={() => { setSection(key); setOpen(false); }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
