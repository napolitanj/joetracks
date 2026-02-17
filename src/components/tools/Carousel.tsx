import { useState, useEffect } from "react";
import "../../styles/Carousel.css";

interface CarouselImage {
  src: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoScroll?: boolean;
  interval?: number;
  fixedHeight?: "clamp(20rem, 50vh, 31rem)";
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoScroll = true,
  interval = 8000,
  fixedHeight = "31em",
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoScroll, interval]);

  if (!images || images.length === 0) return null;

  const showDots = images.length <= 6;

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <div className="carousel-image-wrapper">
          <img
            src={images[current].src}
            alt={images[current].caption || `Slide ${current + 1}`}
            className="carousel-img"
          />
        </div>

        <div className="carousel-footer">
          {images[current].caption && (
            <p className="carousel-caption">{images[current].caption}</p>
          )}

          <div className="carousel-controls">
            <button
              onClick={prevSlide}
              className="carousel-arrow-btn"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="carousel-arrow-btn"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {showDots && (
            <div className="carousel-dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
