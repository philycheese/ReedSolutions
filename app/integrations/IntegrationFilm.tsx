"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./integrations.module.css";

type FilmProps = {
  title: string;
  label: string;
  duration: string;
  src: string;
  poster: string;
  captions: string;
};

export default function IntegrationFilm({ title, label, duration, src, poster, captions }: FilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  useEffect(() => {
    const video = videoRef.current;
    let active = true;
    video?.play().catch((error: DOMException) => {
      if (active && error.name === "NotAllowedError") setNeedsTap(true);
    });
    return () => { active = false; };
  }, [src]);

  function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play().catch(() => setNeedsTap(true));
  }

  return (
    <figure className={styles.film}>
      <div className={styles.player}>
        <video ref={videoRef} aria-label={title} autoPlay controls playsInline preload="metadata"
          poster={basePath + poster} onPlay={() => setNeedsTap(false)}>
          <source src={basePath + src} type="video/mp4" />
          <track src={basePath + captions} kind="captions" srcLang="en" label="English" />
          <a href={basePath + src}>Watch {label.toLowerCase()}</a>
        </video>
        {needsTap && <button type="button" className={styles.playButton} onClick={playWithSound}>Play with sound</button>}
      </div>
      <figcaption><span>{label}</span><span>{duration} · Captioned</span></figcaption>
    </figure>
  );
}
