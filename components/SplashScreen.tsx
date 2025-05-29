import styles from '../styles/globals.scss';

export default function SplashScreen() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#111',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontSize: '2rem',
      flexDirection: 'column',
    }}>
      <div>Loading App...</div>
      {/* You can add a spinner here if desired */}
    </div>
  );
}
