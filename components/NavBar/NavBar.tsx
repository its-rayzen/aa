import styles from './NavBar.module.scss'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

export default function NavBar() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.desktopNav}>
        <div className={styles.links}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${router.pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.mobileNav}>
        <MobileMenu />
      </div>
    </nav>
  )
}