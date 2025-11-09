"use client";
import React, { useRef, useEffect } from "react";
import { Merriweather } from "next/font/google";
import { gsap } from "gsap";

const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const SkyXElement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<SVGGElement[]>([]);

  //   // Random movement factors for parallax depth
  //   const movementFactors = [15, 20, 25, 30];

  //   useEffect(() => {
  //     const handleMouseMove = (e: MouseEvent) => {
  //       if (!containerRef.current) return;

  //       const { left, top, width, height } =
  //         containerRef.current.getBoundingClientRect();

  //       const mouseX = ((e.clientX - left) / width - 0.5) * 2; // -1 to 1
  //       const mouseY = ((e.clientY - top) / height - 0.5) * 2; // -1 to 1

  //       groupRefs.current.forEach((group, i) => {
  //         const factor = movementFactors[i] || 15;
  //         gsap.to(group, {
  //           x: mouseX * factor,
  //           y: mouseY * factor,
  //           duration: 0.5,
  //           ease: "power3.out",
  //         });
  //       });
  //     };

  //     containerRef.current?.addEventListener("mousemove", handleMouseMove);

  //     return () =>
  //       containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  //   }, []);

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = gsap.utils.toArray<SVGPathElement>("path", svgRef.current);

    // Assign each path a fixed movement factor (for parallax depth)
    const movementFactors = paths.map(() => 5 + Math.random() * 10); // distance multiplier

    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const { left, top, width, height } =
        svgRef.current.getBoundingClientRect();

      // Normalized mouse positions (-1 to 1)
      const mouseX = ((e.clientX - left) / width - 0.5) * 2;
      const mouseY = ((e.clientY - top) / height - 0.5) * 2;

      paths.forEach((path, i) => {
        const factor = movementFactors[i];
        gsap.to(path, {
          x: mouseX * factor, // smooth left/right
          y: mouseY * factor, // smooth top/bottom
          duration: 0.8,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:h-[75%] xl:h-[80%] h-[45%] w-[100%] xl:w-[100%] absolute md:top-50 xl:top-0 top-50 left-0 flex justify-center items-center z-[70] "
    >
      <div
        className={`absolute flex justify-center items-center top-5 left-3 z-[50] md:text-[12rem] text-9xl text-yellow-300 h-full w-full tracking-widest ${merriWeather.className}`}
      >
        <h1>SKY</h1>
      </div>

      <svg
        ref={svgRef}
        className="h-[80%] overflow-visible"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 692.26 586.62"
      >
        <g id="_X_Group_" data-name="&lt;X Group&gt;">
          {/* Top Left */}
          <g
            ref={(el) => {
              if (el) groupRefs.current[0] = el;
            }}
          >
            <path
              fill="gray"
              d="M185.13,40.31c-17,14-11,51,12,55,14.92,3.24,29.85,3.54,44.77,3.35l-32.18-40.61c-6.84-9.05-10.36-15.54-11.81-20.73-4.88-.12-9.38.44-12.78,2.99Z"
            />
            <path
              fill="#f5e6a1"
              d="M143.24,0c-1.78,9.12-1.19,19.04-9.11,24.31-18.81,13.83-40.37,18.47-62.31,18.51,7.3,5.71,14.18,11.93,20.57,18.64l33.3,34.98c15.09-10.67,30.4-20.97,39.44-37.12,10.02-17.53,9.59-39.24,14.99-59.31h-36.88Z"
            />
            <path
              fill="gold"
              d="M257.83,118.76c-23.35-5.28-47-6.53-71.7-1.45-10.13,2.38-23.09,3.35-32.98,7.97l32.71,34.36h32.56c15.23-11.41,32.4-21.39,50.63-26.71l-11.23-14.17Z"
            />
            <path
              fill="gold"
              d="M257.83,118.76l-15.93-20.1c-14.92.19-29.85-.1-44.77-3.35-23-4-29-41-12-55,3.4-2.55,7.9-3.11,12.78-2.99-2.52-9.04,1.27-14.12,4.85-21.84l11.93-15.48h-34.57c-5.4,20.07-4.97,41.78-14.99,59.31-9.04,16.15-24.35,26.46-39.44,37.12l27.46,28.84c9.89-4.62,22.85-5.58,32.98-7.97,24.7-5.09,48.34-3.83,71.7,1.45Z"
            />
            <path
              fill="#f5e6a1"
              d="M269.06,132.93c-18.23,5.32-35.4,15.3-50.63,26.71h71.8l-21.17-26.71Z"
            />
            <path
              fill="gold"
              d="M143.24,0H0l47.27,26.47c8.62,4.83,16.82,10.3,24.55,16.35,21.94-.04,43.51-4.68,62.31-18.51,7.92-5.28,7.32-15.2,9.11-24.31Z"
            />
          </g>

          {/* Bottom Left */}
          <g
            ref={(el) => {
              if (el) groupRefs.current[1] = el;
            }}
          >
            <path
              fill="#f5e6a1"
              d="M109.13,558.31c-16.41-3.73-36.71,3.1-53.85-1.06-4.01,2.83-8.18,5.45-12.49,7.83l-39.14,21.55h134.04c-7.27-12.53-15.13-24.59-28.55-28.31Z"
            />
            <path
              fill="gray"
              d="M219.81,471.39h-71.28l-22.87,21.5c31.41,12.5,71.5,3.61,94.15-21.5Z"
            />
            <path
              fill="#f5e6a1"
              d="M219.81,471.39c-22.65,25.11-62.74,34-94.15,21.5l-32.86,30.9c39.15,5,77.5,6.72,113.73,20.99,1.44-8.09,4.73-15.88,9.83-22.72l37.75-50.68h-34.3Z"
            />
            <path
              fill="gold"
              d="M92.8,523.79l-23.08,21.7c-4.53,4.26-9.36,8.18-14.45,11.76,17.14,4.16,37.44-2.67,53.85,1.06,13.42,3.73,21.28,15.79,28.55,28.31h76.23l-5.24-14.98c-3.06-8.76-3.72-17.99-2.14-26.86-36.23-14.27-74.58-15.99-113.73-20.99Z"
            />
          </g>

          {/* Bottom Right */}
          <g
            ref={(el) => {
              if (el) groupRefs.current[2] = el;
            }}
          >
            <path
              fill="gray"
              d="M437.82,471.39l23.36,31.36c3.31-11.64,7.46-22.7,14.23-31.36h-37.59Z"
            />
            <path
              fill="#f5e6a1"
              d="M514.13,503.31c29.62,16.93,61.73,22.91,93.87,28.83l-64.61-60.75h-33.55c-7.31,10.47-5.52,26.21,4.28,31.93Z"
            />
            <path
              fill="#f5e6a1"
              d="M486.18,556.22c-.21,5.19-1.17,10.38-2.93,15.42l-5.24,14.98h65.51c-16.14-17.38-35.95-33.17-57.35-30.4Z"
            />
            <path
              fill="gold"
              d="M649.14,565.08c-5.96-3.28-11.63-7-16.99-11.13-8.56,2.56-16.98,5.27-25.02,8.36-22,6-43-8-63-20-21.81-12.46-47.26-28.56-72.56-25.62l4,5.37c7.47,10.03,11.1,22.08,10.61,34.16,21.4-2.77,41.21,13.02,57.35,30.4h144.75l-39.14-21.55Z"
            />
            <path
              fill="gold"
              d="M622.2,545.49l-14.2-13.35c-32.14-5.92-64.25-11.9-93.87-28.83-9.81-5.72-11.59-21.45-4.28-31.93h-34.44c-6.78,8.67-10.92,19.72-14.23,31.36l10.39,13.94c25.31-2.94,50.75,13.16,72.56,25.62,20,12,41,26,63,20,8.04-3.09,16.46-5.8,25.02-8.36-3.45-2.66-6.78-5.48-9.95-8.46Z"
            />
          </g>

          {/* Top Right */}
          <g
            ref={(el) => {
              if (el) groupRefs.current[3] = el;
            }}
          >
            <path
              fill="gold"
              d="M572.54,0c-4.49,23.39,19.41,38.18,36.09,52.88,11-10.15,23.19-19.03,36.36-26.4L692.26,0h-119.72Z"
            />
            <path
              fill="#f5e6a1"
              d="M545.13,76.31c-25.56,26.44-41.81,66.07-74.06,83.32h35.32l85.62-89.92c-16.48-6.13-34.41-5.87-46.89,6.6Z"
            />
            <path
              fill="gray"
              d="M429.95,124.42l-27.91,35.22h50.13c-6.08-12.84-12.4-26.12-22.22-35.22Z"
            />
            <path
              fill="gold"
              d="M541.13,25.31c-15.98-4.86-31.47,2.34-46.49,10.88-.63,2.74-1.86,5.85-3.88,9.52,6.75,2.57,12.73,7.38,17.37,14.6,6,10,7,23-3,30-19.25,14.58-41.23,18.27-63.54,19.42l-11.64,14.69c9.81,9.1,16.13,22.38,22.22,35.22h18.91c32.25-17.25,48.5-56.88,74.06-83.32,12.47-12.47,30.41-12.72,46.89-6.6l7.86-8.25c.64-.67,1.31-1.32,1.96-1.98-19.26-13.41-38.11-28.01-60.7-34.17Z"
            />
            <path
              fill="#f5e6a1"
              d="M572.54,0h-24.2c-16.28,11.89-35.83,24.77-54.75,24.19,1.43,3.62,2.13,7.27,1.05,12.01,15.01-8.54,30.51-15.74,46.49-10.88,22.59,6.16,41.44,20.76,60.7,34.17,2.22-2.25,4.48-4.46,6.8-6.6-16.68-14.7-40.58-29.49-36.09-52.88Z"
            />
            <path
              fill="gold"
              d="M493.6,24.19c18.92.59,38.47-12.29,54.75-24.19h-70.77l11.93,15.48c1.48,3.2,3,5.94,4.09,8.71Z"
            />
            <path
              fill="gray"
              d="M508.13,60.31c-4.64-7.22-10.62-12.03-17.37-14.6-1.94,3.53-4.62,7.58-8.22,12.33l-40.95,51.68c22.31-1.14,44.29-4.83,63.54-19.42,10-7,9-20,3-30Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SkyXElement;
