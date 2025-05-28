import { ReactNode } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout