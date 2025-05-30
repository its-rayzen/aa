import { useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import { FaInstagram, FaSoundcloud, FaYoutube, FaTiktok } from 'react-icons/fa'

const socials = [
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/yourprofile",
    label: "Instagram"
  },
  {
    icon: <FaSoundcloud />,
    href: "https://soundcloud.com/yourprofile",
    label: "SoundCloud"
  },
  {
    icon: <FaYoutube />,
    href: "https://youtube.com/yourchannel",
    label: "YouTube"
  },
  {
    icon: <FaTiktok />,
    href: "https://tiktok.com/@yourprofile",
    label: "TikTok"
  }
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsVisible(scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.socials}>
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={styles.icon}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} RAYZEN — All rights reserved.
      </div>
    </footer>
  )
}