import { type CSSProperties, type HTMLAttributes, useEffect, useRef, useState } from "react";
import "../../styles/reveal.css";

type RevealVariant = "up" | "left" | "right";

type RevealProps = {
  as?: "div" | "section" | "article" | "main";
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
} & HTMLAttributes<HTMLElement>;

const Reveal = ({
  as = "div",
  children,
  className = "",
  variant = "up",
  delay = 0,
  style,
  ...rest
}: RevealProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const classes = `reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`.trim();
  const mergedStyle: CSSProperties = {
    transitionDelay: `${delay}ms`,
    ...style,
  };

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
