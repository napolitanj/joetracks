import { useCallback, useEffect, useState } from "react";
import { ExpeditionImage } from "../../types/Expedition";
import "./photo-gallery.css";

type Props = {
  images: ExpeditionImage[];
};

export default function PhotoGallery({ images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = current + delta;
        if (next < 0 || next >= images.length) return current;
        return next;
      }),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  if (images.length === 0) return null;

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div
        className={`xp-gallery ${images.length === 1 ? "xp-gallery-single" : ""}`}
      >
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="xp-gallery-item"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo ${i + 1} of ${images.length}: ${image.alt}`}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              width={480}
              height={360}
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="xp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            className="xp-lightbox-close"
            onClick={close}
            aria-label="Close photo"
          >
            ×
          </button>

          {openIndex !== null && openIndex > 0 && (
            <button
              type="button"
              className="xp-lightbox-nav xp-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          <figure
            className="xp-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} />
            <figcaption>
              {openIndex !== null ? openIndex + 1 : 0} of {images.length}
            </figcaption>
          </figure>

          {openIndex !== null && openIndex < images.length - 1 && (
            <button
              type="button"
              className="xp-lightbox-nav xp-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
