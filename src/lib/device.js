import { useEffect, useState } from "react";

/** One-time WebGL capability check (cached). */
let webglOk = null;
export function hasWebGL() {
  if (webglOk !== null) return webglOk;
  try {
    const c = document.createElement("canvas");
    webglOk = !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch (e) {
    webglOk = false;
  }
  return webglOk;
}

/**
 * Device profile used to scale 3D quality and layout:
 *  tier: "none" (no WebGL / reduced motion), "low" (phones, weak CPUs), "mid" (tablets, small laptops), "high"
 *  portrait / shortLandscape drive layout (phones held either way, foldables, ultra-wide screens)
 */
export function getDeviceProfile() {
  if (typeof window === "undefined") {
    return { tier: "high", portrait: false, shortLandscape: false, touch: false, reducedMotion: false, width: 1440, height: 900 };
  }
  const w = window.innerWidth;
  const h = window.innerHeight;
  const touch = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  let tier = "high";
  if (!hasWebGL()) tier = "none";
  else if (w < 768 || cores <= 4 || mem <= 2) tier = "low";
  else if (w < 1280 || touch) tier = "mid";
  return {
    tier,
    portrait: h > w * 1.05,
    shortLandscape: w > h && h < 520,
    touch,
    reducedMotion,
    width: w,
    height: h,
  };
}

export function useDeviceProfile() {
  const [profile, setProfile] = useState(getDeviceProfile);
  useEffect(() => {
    let t;
    const update = () => {
      clearTimeout(t);
      t = setTimeout(() => setProfile(getDeviceProfile()), 150);
    };
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener?.("change", update);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      mq.removeEventListener?.("change", update);
    };
  }, []);
  return profile;
}

/** True once the element is (near) the viewport; used to start/stop 3D render loops. */
export function useInView(ref, rootMargin = "200px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

/** Defers heavy work until the browser is idle after first paint (text shows instantly). */
export function useIdleReady(timeout = 600) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 120));
    const cic = window.cancelIdleCallback || clearTimeout;
    const id = ric(() => setReady(true), { timeout });
    return () => cic(id);
  }, [timeout]);
  return ready;
}

/** Device-pixel-ratio range per tier (keeps phones fast, desktops crisp). */
export const DPR = { low: [1, 1.25], mid: [1, 1.5], high: [1, 2], none: [1, 1] };
