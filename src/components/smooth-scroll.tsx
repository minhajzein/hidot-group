"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Sync GSAP with Lenis
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger on every scroll
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    // If you need to sync with a specific Lenis instance,
    // you can do it here, but ReactLenis handles the global instance usually.
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
