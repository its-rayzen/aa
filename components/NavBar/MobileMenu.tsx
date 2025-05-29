import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavBar.module.scss'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/listen', label: 'Listen' },
  { href: '/livesets', label: 'Live Sets' },
  { href: '/booking', label: 'Booking' }
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Close menu on route change
  const handleLinkClick = (href: string) => {
    setOpen(false)
    router.push(href)
  }

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
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.menuLink} prefetch>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
