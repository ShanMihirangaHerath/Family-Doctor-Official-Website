import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DnaBackground = () => {
  const containerRef = useRef(null);
  const lottieObjRef = useRef(null);

  useEffect(() => {
    lottieObjRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false, 
      path: '/dna.json' 
    });

    lottieObjRef.current.addEventListener('DOMLoaded', () => {
      
      const totalFrames = lottieObjRef.current.totalFrames;

      gsap.to({ frame: 0 }, {
        frame: totalFrames - 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        onUpdate: function () {
          lottieObjRef.current.goToAndStop(Math.round(this.targets()[0].frame), true);
        }
      });
    });

    return () => {
      lottieObjRef.current?.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none flex justify-center items-center overflow-hidden bg-slate-50">
      <div ref={containerRef} className="w-[800px] max-w-full" />
    </div>
  );
};

export default DnaBackground;