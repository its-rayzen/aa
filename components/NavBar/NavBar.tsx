import Link from 'next/link'
import styles from './NavBar.module.scss'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/listen">Listen</Link></li>
        <li><Link href="/livesets">Live Sets</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/booking">Booking</Link></li>
      </ul>
    </nav>
  )
}