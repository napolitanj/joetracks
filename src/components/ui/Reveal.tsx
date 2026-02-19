import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import "../../styles/reveal.css";

type RevealVariant = "up" | "left" | "right";
type RevealDelay = 0 | 80 | 120 | 200 | 280 | 360 | 440 | 520;

const SUPPORTED_DELAYS: RevealDelay[] = [0, 80, 120, 200, 280, 360, 440, 520];
let revealMountCount = 0;

const normalizeDelay = (delay: number | string | undefined): RevealDelay => {
  const parsed = typeof delay === "string" ? Number(delay) : delay ?? 0;
  if (!Number.isFinite(parsed)) return 0;

  let nearest = SUPPORTED_DELAYS[0];
  let nearestDelta = Math.abs(parsed - nearest);
  for (const candidate of SUPPORTED_DELAYS) {
    const delta = Math.abs(parsed - candidate);
    if (delta < nearestDelta) {
      nearest = candidate;
      nearestDelta = delta;
    }
  }
  return nearest;
};

type RevealProps = {
  as?: "div" | "section" | "article" | "main";
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number | `${RevealDelay}`;
} & HTMLAttributes<HTMLElement>;

const Reveal = ({
  as = "div",
  children,
  className = "",
  variant = "up",
  delay = 0,
  ...rest
}: RevealProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);
  const normalizedDelay = normalizeDelay(delay);

  useEffect(() => {
    revealMountCount += 1;
    document.body.classList.add("js");
    return () => {
      revealMountCount = Math.max(0, revealMountCount - 1);
      if (revealMountCount === 0) {
        document.body.classList.remove("js");
      }
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const forceVisible = () => setVisible(true);

    // Fail-safe in case observer never fires.
    fallbackTimeoutRef.current = window.setTimeout(forceVisible, 1500);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      forceVisible();
      return () => {
        if (fallbackTimeoutRef.current !== null) {
          window.clearTimeout(fallbackTimeoutRef.current);
        }
      };
    }

    if (typeof window.IntersectionObserver === "undefined") {
      forceVisible();
      return () => {
        if (fallbackTimeoutRef.current !== null) {
          window.clearTimeout(fallbackTimeoutRef.current);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
          if (fallbackTimeoutRef.current !== null) {
            window.clearTimeout(fallbackTimeoutRef.current);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.unobserve(node);
      observer.disconnect();
      if (fallbackTimeoutRef.current !== null) {
        window.clearTimeout(fallbackTimeoutRef.current);
      }
    };
  }, []);

  const Tag = as;
  const classes = `reveal reveal-${variant} reveal-delay-${normalizedDelay} ${visible ? "is-visible" : ""} ${className}`.trim();

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
