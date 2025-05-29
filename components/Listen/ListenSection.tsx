import styles from './ListenSection.module.scss'
import { motion } from 'framer-motion'

const tracks = [
  {
    title: "Midnight Drive (Original Mix)",
    genre: "Techno",
    url: "https://soundcloud.com/forss/flickermood",
    note: "Peak time energy"
  },
  {
    title: "Sunset Mirage (Rayzen Edit)",
    genre: "Melodic House",
    url: "https://soundcloud.com/odesza/loyal",
    note: "Melodic, emotional"
  },
  {
    title: "Rewired Dreams (Remix)",
    genre: "Progressive",
    url: "https://soundcloud.com/monstercat/pegboard-nerds-hero",
    note: ""
  },
  {
    title: "Voltage (Live Mix)",
    genre: "Tech-house",
    url: "https://soundcloud.com/officialmeduza/piece-of-your-heart",
    note: "Recorded live"
  }
]

import React, { useEffect, useState } from 'react';

export default function ListenSection() {
  // Track loading state for each iframe
  const [loaded, setLoaded] = useState(Array(tracks.length).fill(false));
  const [showOverlay, setShowOverlay] = useState(Array(tracks.length).fill(true));


  useEffect(() => {
    // Ensure overlay stays for at least 0.8s after mount
    const timers = tracks.map((_, idx) =>
      setTimeout(() => {
        setShowOverlay(prev => {
          const copy = [...prev];
          copy[idx] = false;
          return copy;
        });
      }, 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleLoad = (idx: number) => {
    setLoaded(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
    // If 0.8s already passed, remove overlay
    setTimeout(() => {
      setShowOverlay(prev => {
        const copy = [...prev];
        copy[idx] = false;
        return copy;
      });
    }, 800);
  };

  return (
    <section className={styles.listen} id="listen">
      <h2 className={styles.title}>MIXES · REMIXES · EDITS</h2>
      <div className={styles.grid}>
        {tracks.map((track, idx) => (
          <motion.div
            className={styles.card}
            key={track.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.09 }}
          >
            <div className={styles.player}>
              <iframe
                width="100%"
                height="120"
                allow="autoplay"
                scrolling="no"
                frameBorder="no"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23333333&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                title={`SoundCloud Player: ${track.title}`}
                onLoad={() => handleLoad(idx)}
                style={{
                  filter: showOverlay[idx]
                    ? 'blur(8px) brightness(0.5)'
                    : 'blur(0px) brightness(1)',
                  transition: 'filter 2.2s cubic-bezier(0.4,0,0.2,1)',
                  borderRadius: 7
                }}
              />
              <div
                className={styles.overlay + (showOverlay[idx] ? ' ' + styles.overlayVisible : ' ' + styles.overlayHidden)}
              >
                <div className={styles.loadingBarWrapper}>
                  <div className={styles.loadingBar}>
                    {!showOverlay[idx] && (
                      <div className={styles.shimmer}></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.meta}>
                <span className={styles.genre}>{track.genre}</span>
                {track.note && <span className={styles.note}>{track.note}</span>}
              </div>
              <h3 className={styles.heading}>{track.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}