
import styles from './AboutSection.module.scss';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from './useSectionInView';

interface AboutSectionProps {
  showButton?: boolean;
  onLiveSetsClick?: () => void;
}

export default function AboutSection({ showButton = true, onLiveSetsClick }: AboutSectionProps) {
  // State to control the animation sequence
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  // Scroll-driven animation hooks for each section
  const [storyRef, storyInView] = useSectionInView<HTMLDivElement>();
  const [moreRef, moreInView] = useSectionInView<HTMLDivElement>();
  const [visionRef, visionInView] = useSectionInView<HTMLDivElement>();

  // Animation variants for sections
  const variants = {
    hiddenRight: { x: '30vw', opacity: 0, filter: 'blur(16px)', skewX: 12 },
    hiddenLeft: { x: '-30vw', opacity: 0, filter: 'blur(16px)', skewX: -12 },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: 'blur(0px)', 
      skewX: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 60, 
        damping: 18,
        delay: 0.3 // Small delay after logo animation
      } 
    },
    exitLeft: { x: '-30vw', opacity: 0, filter: 'blur(16px)', skewX: -12, transition: { duration: 0.5 } },
    exitRight: { x: '30vw', opacity: 0, filter: 'blur(16px)', skewX: 12, transition: { duration: 0.5 } },
  };


  return (
    <section className={styles.about} id="about" style={{ position: 'relative' }}>
      {/* Logo animation on load */}
      <motion.div
        className={styles.aboutLogo}
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        onAnimationComplete={() => setLogoAnimationComplete(true)}
      >
        RAYZEN
      </motion.div>

      {/* STORY */}
      <motion.div
        ref={storyRef}
        className={styles.content}
        initial="hiddenRight"
        animate={logoAnimationComplete && storyInView ? 'visible' : 'hiddenRight'}
        variants={variants}
        style={{ zIndex: 3 }}
      >
        <div className={styles.left}>
          <div className={styles.imgGlow + ' ' + styles.imgGlowLarge} style={{ borderRadius: '1rem', overflow: 'hidden', width: '800px', height: '800px', maxWidth: '100%', maxHeight: '100%', margin: '0', boxShadow: '0 0 24px #fff, 0 0 64px #fff88', border: '4px solid #fff', background: '#101010', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/avatar.jpg" alt="RAYZEN Portrait" style={{ borderRadius: '1rem', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>Story</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
      </motion.div>

      {/* MORE THAN DJ */}
      <motion.div
        ref={moreRef}
        className={styles.content + ' ' + styles.duplicateContent}
        initial="hiddenLeft"
        animate={logoAnimationComplete && moreInView ? 'visible' : 'hiddenLeft'}
        variants={variants}
        style={{ zIndex: 2 }}
      >
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>More than DJ</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
        <div className={styles.left}>
          <div className={styles.imgGlow} style={{ borderRadius: '1rem', overflow: 'hidden', width: '432px', height: '432px', maxWidth: '100%', maxHeight: '100%', margin: '0', boxShadow: '0 0 24px #fff, 0 0 64px #fff88', border: '4px solid #fff', background: '#101010', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/extreme.jpg" alt="Extreme Sports" style={{ borderRadius: '1rem', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </motion.div>

      {/* VISION */}
      <motion.div
        ref={visionRef}
        className={styles.content + ' ' + styles.duplicateContent}
        initial="hiddenRight"
        animate={logoAnimationComplete && visionInView ? 'visible' : 'hiddenRight'}
        variants={variants}
        style={{ zIndex: 1 }}
      >
        <div className={styles.left}>
          <div className={styles.imgGlow} style={{ borderRadius: '1rem', overflow: 'hidden', width: '800px', height: '800px', maxWidth: '100%', maxHeight: '100%', margin: '0', boxShadow: '0 0 24px #fff, 0 0 64px #fff88', border: '4px solid #fff', background: '#101010', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/dj.jpg" alt="DJ Performance" style={{ borderRadius: '1rem', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.quoteTitle}>VISION</h2>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...<br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
        </div>
      </motion.div>
    </section>
  );
}