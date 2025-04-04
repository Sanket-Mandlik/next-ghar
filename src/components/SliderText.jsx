import { useEffect, useRef } from "react";

const SliderText = () => {
  const marqueeRef = useRef(null);
  const speed = 1; // Adjust speed as needed (pixels per frame)

  useEffect(() => {
    let animationFrameId;
    const marqueeEl = marqueeRef.current;
    let position = 0;

    const animate = () => {
      if (marqueeEl) {
        position -= speed;
        // When the left half of the duplicated content has scrolled out, reset
        if (Math.abs(position) >= marqueeEl.scrollWidth / 2) {
          position = 0;
        }
        marqueeEl.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div className="w-full mt-15 -mb-5  max-w-[95vw] mx-auto overflow-clip flex items-center text-warm-beige/30 font-semibold text-6xl">
      <div ref={marqueeRef} className="flex whitespace-nowrap gap-12">
        {/* Duplicate content so the loop appears seamless */}
        {[...Array(10)].map((_, index) => (
          <span key={index} className="mx-8">Make My Ghar</span>
        ))}
        {[...Array(10)].map((_, index) => (
          <span key={index + 10} className="mx-8">Make My Ghar</span>
        ))}
      </div>
    </div>
  );
};

export default SliderText;
