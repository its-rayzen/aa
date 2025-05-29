
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading or preload assets here
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <SplashScreen />;
  }

  return <Component {...pageProps} />;
}