
import styles from './AboutSection.module.scss'
import { useRef, useLayoutEffect, useState } from 'react';

interface AboutSectionProps {
  showButton?: boolean;
  onLiveSetsClick?: () => void;
}

export default function AboutSection({ showButton = true, onLiveSetsClick }: AboutSectionProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoLine, setLogoLine] = useState<{ x: number; y: number }>({ x: 552, y: 80 });

  useLayoutEffect(() => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      const section = logoRef.current.closest('section');
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        // Center X of logo in section coordinates, scaled to SVG viewBox
        const centerX = rect.left - sectionRect.left + rect.width / 2;
        const scale = 1100 / sectionRect.width;
        // Y just below the logo
        const y = rect.bottom - sectionRect.top + 6; // 6px below logo
        setLogoLine({ x: centerX * scale, y: y * scale });
      }
    }
  }, []);

  return (
    <section className={styles.about} id="about" style={{position: 'relative'}}>
      <div className={styles.aboutLogo} ref={logoRef}>RAYZEN</div>

      <div className={styles.content}>
        <div
          className={styles.left}
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className={styles.imgGlow + ' ' + styles.imgGlowLarge}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              width: '800px',
              height: '800px',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: '0 0 0 0',
              boxShadow: '0 0 24px #fff, 0 0 64px #fff88',
              border: '4px solid #fff',
              background: '#101010',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/avatar.jpg"
              alt="RAYZEN Portrait"
              style={{
                borderRadius: '1rem',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>Story</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
      </div>

      {/* Duplicated and reversed section */}
      <div className={styles.content + ' ' + styles.duplicateContent}>
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>More than DJ</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
        <div
          className={styles.left}
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className={styles.imgGlow}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              width: '432px',
              height: '432px',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: '0 0 0 0',
              boxShadow: '0 0 24px #fff, 0 0 64px #fff88',
              border: '4px solid #fff',
              background: '#101010',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/extreme.jpg"
              alt="Extreme Sports"
              style={{
                borderRadius: '1rem',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>


      {/* VISION section (original order, image left, text right) */}
      <div className={styles.content + ' ' + styles.duplicateContent}>
        <div
          className={styles.left}
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className={styles.imgGlow}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              width: '800px',
              height: '800px',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: '0 0 0 0',
              boxShadow: '0 0 24px #fff, 0 0 64px #fff88',
              border: '4px solid #fff',
              background: '#101010',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/dj.jpg"
              alt="DJ Performance"
              style={{
                borderRadius: '1rem',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>VISION</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
      </div>
      {showButton && (
        <div className={styles.aboutButtonWrapper}>
          <button
            className={styles.bookNowBtn}
            style={{ visibility: showButton ? 'visible' : 'hidden' }}
            onClick={onLiveSetsClick}
          >
            Live Mixes
          </button>
        </div>
      )}
    </section>
  )
}