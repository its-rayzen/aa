import styles from './AboutSection.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

interface AboutSectionProps {
  showButton?: boolean;
  onLiveSetsClick?: () => void;
}

export default function AboutSection({ showButton = true, onLiveSetsClick }: AboutSectionProps) {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
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
              width: '432px', // 270px * 1.6 upscale 60%
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
        </motion.div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.right}
        >
          <blockquote className={styles.quote}>
            “This isn’t just music — it’s a livewire moment, every time.”
          </blockquote>
          <p className={styles.bio}>
            RAYZEN is a rising force in the electronic music scene, known for crafting unforgettable experiences driven by movement, emotion, and pure energy. Rather than being confined to any one genre, RAYZEN commands momentum building dynamic, genre-fluid sets that captivate crowds and ignite dance floors. Every performance is a journey, powered by intuitive crowd control...
            <br /><br />
            With an acute ear for what moves both the body and the soul, RAYZEN curates each set with intention balancing underground appeal with accessible energy that keeps audiences locked in from start to finish. Whether opening, closing, or peaking a night, RAYZEN adapts to the moment and owns it, delivering a presence that fills the room and resonates long after the last track. For promoters and venues seeking a DJ who brings both skill and story, precision and passion RAYZEN is not just a booking, but a statement.
          </p>
          <div style={{ minHeight: 48, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatePresence initial={false}>
              <motion.div
                style={{ width: 'auto', display: 'flex', justifyContent: 'center' }}
                initial={false}
                animate={{ opacity: showButton ? 1 : 0, y: showButton ? 12 : 30 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <button
                  className={styles.bookNowBtn}
                  style={{ visibility: showButton ? 'visible' : 'hidden' }}
                  onClick={onLiveSetsClick}
                >
                  Live Mixes
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}