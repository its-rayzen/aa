
import styles from './LiveSetsSection.module.scss'
// Removed framer-motion for no animation
import React, { useEffect, useState } from 'react';

const sets = [
  {
    title: "Live at Noir Nights 2024",
    description: "Opening set, peak hour, crowd energy capture.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4"
  },
  {
    title: "Pulse Room Deep Session",
    description: "Melodic & progressive, full club journey.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Studio Stream: Breaks & Bass",
    description: "Studio set blending breakbeats with deep bass.",
    video: "https://www.youtube.com/embed/ltrMfT4Qz5Y"
  }
]

export default function LiveSetsSection() {
  const [showOverlay, setShowOverlay] = useState(Array(sets.length).fill(true));

  useEffect(() => {
    const timers = sets.map((_, idx) =>
      setTimeout(() => {
        setShowOverlay(prev => {
          const copy = [...prev];
          copy[idx] = false;
          return copy;
        });
      }, 400)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleLoad = (idx: number) => {
    setTimeout(() => {
      setShowOverlay(prev => {
        const copy = [...prev];
        copy[idx] = false;
        return copy;
      });
    }, 400);
  };

  return (
    <section className={styles.liveSets} id="livesets">
      <h2 className={styles.title}>Live Sets</h2>
      <div className={styles.grid}>
        {sets.map((set, idx) => (
          <div
            className={styles.card}
            key={set.title}
          >
            <div className={styles.player}>
              <iframe
                width="100%"
                height="210"
                src={set.video}
                title={set.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                onLoad={() => handleLoad(idx)}
                style={{
                  filter: showOverlay[idx]
                    ? 'blur(8px) brightness(0.5)'
                    : 'blur(0px) brightness(1)',
                  transition: 'filter 3.5s cubic-bezier(0.4,0,0.2,1)',
                  borderRadius: 7
                }}
              />
              <div
                className={styles.overlay + (showOverlay[idx] ? ' ' + styles.overlayVisible : ' ' + styles.overlayHidden)}
              >
                <div className={styles.spinner}></div>
              </div>
            </div>
            <h3>{set.title}</h3>
            <p className={styles.desc}>{set.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}