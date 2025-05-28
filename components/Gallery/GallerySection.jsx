import { useRef, useState, useEffect } from "react";
import styles from "./GallerySection.module.scss";

const descAnimations = [
  styles.descAnimFadeUp,
  styles.descAnimFadeLeft,
  styles.descAnimFadeRight,
  styles.descAnimZoomIn,
  styles.descAnimFlipIn,
];

function GallerySection(props) {
  const imageCellRef = useRef(null);
  const [endEffect, setEndEffect] = useState(false);
  const [flash, setFlash] = useState(false);
  const [descAnim, setDescAnim] = useState(descAnimations[0]);

  // Call this when the picture time ends
  const triggerEndEffect = () => {
    setEndEffect(true);
    setTimeout(() => setEndEffect(false), 450); // pop animation
    setTimeout(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 380); // flash duration
    }, 450); // start flash after pop
  };

  useEffect(() => {
    // Logic to detect end of picture time
    // triggerEndEffect();
  }, [/* dependencies: e.g. currentSlideIndex, timer, etc. */]);

  // Call this whenever the picture changes
  useEffect(() => {
    // Pick a random animation class
    const idx = Math.floor(Math.random() * descAnimations.length);
    setDescAnim(descAnimations[idx]);
  }, [props.currentSlideIndex]); // <-- update this dependency as needed

  return (
    <div className="gallery">
      <h2 className="title">Gallery</h2>
      <div className="filters">
        <button className="filterButton">All</button>
        <button className="filterButton">Category 1</button>
        <button className="filterButton">Category 2</button>
      </div>
      <div className="sliderWrapper">
        <div
          ref={imageCellRef}
          className={
            styles.sliderImageCell +
            (props.isScaled ? " " + styles.scaled : "") +
            (endEffect ? " " + styles.endEffect : "")
          }
        >
          {/* ...image and content... */}
          <div className={`${styles.imgDescription} ${descAnim}`}>
            {/* ...description content... */}
          </div>
          <div className={styles.flashOverlay + (flash ? " " + styles.active : "")} />
        </div>
      </div>
      <div className="slideNav">
        <button className="prev">❮</button>
        <button className="next">❯</button>
      </div>
      <div className="slideDots">
        <span className="dot"></span>
        <span className="activeDot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default GallerySection;