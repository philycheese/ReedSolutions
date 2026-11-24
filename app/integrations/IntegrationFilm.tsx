"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./integrations.module.css";

const phonePortrait = "(max-width: 47.99rem) and (orientation: portrait)";

type FilmProps = {
  title: string;
  label: string;
  duration: string;
  src: string;
  poster: string;
  portrait?: { src: string; poster: string };
  captions: string;
};

export default function IntegrationFilm({ title, label, duration, src, poster, portrait, captions }: FilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let active = true;
    const viewport = window.matchMedia(phonePortrait);
    const cut = () => viewport.matches && portrait ? portrait : { src, poster };
    let selected = cut();
    let pending: { time: number; playing: boolean; speed: number } | undefined;

    function start(player: HTMLVideoElement) {
      void player.play().catch((error: DOMException) => {
        if (active && error.name === "NotAllowedError") setNeedsTap(true);
      });
    }

    function switchCut() {
      const next = cut();
      if (!video || next.src === selected.src) return;
      // Keep the original position even if the phone turns again before metadata arrives.
      pending ??= { time: video.currentTime, playing: !video.paused && !video.ended, speed: video.playbackRate };
      selected = next;
      video.autoplay = false;
      video.poster = basePath + selected.poster;
      video.src = basePath + selected.src;
    }

    function restorePlayback() {
      if (!video || !pending) return;
      const { time, playing, speed } = pending;
      pending = undefined;
      video.currentTime = Math.min(time, video.duration);
      video.playbackRate = speed;
      if (playing) start(video);
    }

    video.poster = basePath + selected.poster;
    start(video);
    viewport.addEventListener("change", switchCut);
    video.addEventListener("loadedmetadata", restorePlayback);
    return () => {
      active = false;
      viewport.removeEventListener("change", switchCut);
      video.removeEventListener("loadedmetadata", restorePlayback);
    };
  }, [src, poster, portrait, basePath]);

  function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play().catch(() => setNeedsTap(true));
  }

  return (
    <figure className={styles.film} data-portrait={portrait ? true : undefined}>
      <div className={styles.player}>
        <video ref={videoRef} aria-label={title} autoPlay controls playsInline preload="metadata"
          poster={portrait ? undefined : basePath + poster} onPlay={() => setNeedsTap(false)}>
          {portrait && <source media={phonePortrait} src={basePath + portrait.src} type="video/mp4" />}
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
