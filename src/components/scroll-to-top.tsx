"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Refresh GSAP ScrollTrigger to prevent layout issues on new pages
    setTimeout(() => {
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    }, 100);
  }, [pathname, lenis]);

  return null;
}
