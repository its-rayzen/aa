import styles from './GallerySection.module.scss'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const galleryImages = [
  { src: "/gallery/performance1.jpg", alt: "Performance", tag: "Performance" },
  { src: "/gallery/studio1.jpg", alt: "Studio", tag: "Studio" },
  { src: "/gallery/style1.jpg", alt: "Style", tag: "Style" },
  { src: "/gallery/bts1.jpg", alt: "Behind the Scenes", tag: "Behind the Scenes" },
  { src: "/gallery/performance2.jpg", alt: "Performance", tag: "Performance" },
  { src: "/gallery/studio2.jpg", alt: "Studio", tag: "Studio" }
]

const filterTags = ["All", "Performance", "Studio", "Style", "Behind the Scenes"]

export default function GallerySection() {
  const [filter, setFilter] = useState("All")
  const [isOpen, setIsOpen] = useState(false)
  const [photoIdx, setPhotoIdx] = useState(0)

  const filtered = filter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.tag === filter)

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.filters}>
        {filterTags.map(tag => (
          <button
            key={tag}
            className={filter === tag ? styles.active : ""}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.mosaic}>
        {filtered.map((img, idx) => (
          <div
            className={styles.imgCell}
            key={img.src}
            tabIndex={0}
            onClick={() => { setPhotoIdx(idx); setIsOpen(true) }}
            style={{ backgroundImage: `url(${img.src})` }}
            aria-label={img.alt}
          >
            <span className={styles.imgTag}>{img.tag}</span>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={filtered[photoIdx].src}
          nextSrc={filtered[(photoIdx + 1) % filtered.length].src}
          prevSrc={filtered[(photoIdx + filtered.length - 1) % filtered.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIdx((photoIdx + filtered.length - 1) % filtered.length)
          }
          onMoveNextRequest={() =>
            setPhotoIdx((photoIdx + 1) % filtered.length)
          }
          imageCaption={filtered[photoIdx].tag}
        />
      )}
    </section>
  )
}