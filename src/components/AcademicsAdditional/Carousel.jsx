// Carousel.jsx
import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://lh3.googleusercontent.com/goLaP_C4DNcahSJhbN0osg8j2NjBLIRkh4o76zbqNHrgRMxfAxbO-EjYQyJPQwrI9AvpMTbMKeb7l5TlBUX-GjA=w16383",
  "https://lh5.googleusercontent.com/otlU9nmylqf3QNCZXA62ZF7Qsiij0E0aa9vib8JE9rI0YOWYdWb1luuLXy3Mz0UDthzLVwjCAoeLJL0skmm7uE8=w16383",
  "https://lh3.googleusercontent.com/rT9afqUoGzXMxDxQayQd7i86aBRODWDhfUiFbgIUM_qS3xJiw1Jyt6bK-pejC6IHkeA0a7RBPI_fEIpUqCsXfzs=w16383",
  "https://lh6.googleusercontent.com/aRVO1p_Qea3wHBMYBcGgEcbKq-ihmc30xQJSEGSmBeuyzbhc4rrelGjoZbeC05dUR-1TD1JSBBSDUwvptR0ysIw=w16383",
  "https://lh3.googleusercontent.com/B0S7-29X4weZRNl-YNcmODp4EaZujaXsR1sKFWnkRr-OZUdyjsF2n4xz3PMqYE15ZK31RpY-2lBJWB-P-9ef_NA=w16383",
  "https://lh3.googleusercontent.com/H3h5CVnSfi3EhxVbqy6bCxg06i4Kc8mkE9CJ6m2wpkN24iDNR9A6mQkIll5gBsgvtjif9t3FvcJ0luxgHa1xSwM=w16383",
  "https://lh6.googleusercontent.com/VDtf0bS5q-g09tQhOxSRNZ8qiBASFduhz_ztxNO9RPdpXe_Z2g3JiNBRIqes-a5IkI01jsnvckQmV4Ok9GIirdA=w16383",
  "https://lh3.googleusercontent.com/PIcpN3mz6qWF-TRB4eM-5EKT7qofMRADJCbPAm-0yOmbWogTjvslC8onAmbaez60lTuiNrvG6r7N-KiY3Qc2JO8=w16383",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      delay
    );
    return () => resetTimeout();
  }, [currentIndex]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        width: "600px",
        height: "360px",
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
          aria-label={`Slide ${index + 1}`}
          role="img"
        ></div>
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
