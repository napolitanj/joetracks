import { useEffect, useMemo, useRef, useState } from "react";
import { ExpeditionChapter } from "../../types/Expedition";
import "./chapter-nav.css";

type Props = {
  chapters: ExpeditionChapter[];
  regionOrder: string[];
};

const UNGROUPED = "Dispatches";

export default function ChapterNav({ chapters, regionOrder }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(chapters[0]?.slug ?? "");
  const [open, setOpen] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  const groups = useMemo(() => {
    const byRegion = new Map<string, ExpeditionChapter[]>();
    for (const chapter of chapters) {
      const key = chapter.region ?? UNGROUPED;
      const list = byRegion.get(key);
      if (list) list.push(chapter);
      else byRegion.set(key, [chapter]);
    }
    const ordered = [...byRegion.keys()].sort((a, b) => {
      const ai = regionOrder.indexOf(a);
      const bi = regionOrder.indexOf(b);
      return (ai === -1 ? regionOrder.length : ai) - (bi === -1 ? regionOrder.length : bi);
    });
    return ordered.map((region) => ({
      region,
      items: byRegion.get(region) as ExpeditionChapter[],
    }));
  }, [chapters, regionOrder]);

  /* The site header is sticky and its height differs between breakpoints, so
     measure it rather than hardcoding an offset. */
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".Navbar");
    if (!header) return;

    const measure = () => setHeaderOffset(header.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(header);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    for (const chapter of chapters) {
      const el = document.getElementById(chapter.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [chapters]);

  /* While the sheet is open: escape closes it, and the entry you are currently
     reading is scrolled into view so a 28-chapter list opens where you are. */
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);

    const active = bodyRef.current?.querySelector<HTMLElement>("a.is-active");
    active?.scrollIntoView({ block: "center" });

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeChapter = chapters.find((c) => c.slug === activeSlug);

  return (
    <>
      <div
        className={`xp-nav-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        className="xp-nav"
        aria-label="Chapters"
        style={{ "--xp-header-offset": `${headerOffset}px` } as React.CSSProperties}
      >
        <button
          type="button"
          className="xp-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span className="xp-nav-toggle-text">
            <span className="xp-nav-toggle-kicker">
              {activeChapter?.region ?? "Chapters"}
            </span>
            <span className="xp-nav-toggle-label">
              {activeChapter ? activeChapter.title : "Jump to a chapter"}
            </span>
          </span>
          <span className="xp-nav-toggle-icon" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>

        <div ref={bodyRef} className={`xp-nav-body ${open ? "is-open" : ""}`}>
          <span className="xp-nav-heading">Chapters</span>
          {groups.map((group) => (
            <div key={group.region} className="xp-nav-group">
              <span className="xp-nav-region">{group.region}</span>
              <ul>
                {group.items.map((chapter) => (
                  <li key={chapter.slug}>
                    <a
                      href={`#${chapter.slug}`}
                      className={chapter.slug === activeSlug ? "is-active" : ""}
                      onClick={() => setOpen(false)}
                    >
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
