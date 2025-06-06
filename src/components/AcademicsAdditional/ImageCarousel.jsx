import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://lh4.googleusercontent.com/Osq172VpsPh218FhU7mVHMJQX3I1hZ2z1Cy-y23kgcg3YgFRTZC9IfgLy6ziedte8c7tv7wiLUqu0qFB-AQG2kY=w16383",
  "https://lh5.googleusercontent.com/Lz2fviWcY27BfVfqN6PfziJ3oFs3LLKJklmajBDXiNpGz3VT2Km0Cr5k1-iAAm8XFah7imXAnbM31jxXFevyL0Y=w16383",
  "https://lh4.googleusercontent.com/Iltui1KZ9K-b6MAMBps5ToSnPSdzVh_p0Hp44vBAO9gGMoASeVxG746tj4lmGjw9KFVKag651nLKRQjE4L33iA8=w16383"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      delay
    );
    return () => resetTimeout();
  }, [currentIndex]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        height: "500px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "80%",
            height: "80%",
            position: "absolute",
            top: 0,
            left: 0,
            transition: "opacity 1s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
          }}
          role="img"
          aria-label={`Slide ${index + 1}`}
        />
      ))}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          padding: "8px 12px",
          userSelect: "none",
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          padding: "8px 12px",
          userSelect: "none",
        }}
      >
        ›
      </button>
    </div>
  );
}
