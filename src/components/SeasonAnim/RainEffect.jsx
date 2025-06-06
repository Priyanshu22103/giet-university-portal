import React from "react";
import "./RainEffect.css";
const RainEffect = () => (
  <div className="rain">
    {Array.from({ length: 100 }).map((_, i) => (
      <div
        key={i}
        className="drop"
        style={{
          left: `${Math.random() * 100}vw`,
          animationDuration: `${0.7 + Math.random()}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

export default RainEffect;