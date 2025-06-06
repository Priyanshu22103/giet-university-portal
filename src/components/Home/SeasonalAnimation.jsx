import React from "react";
import Confetti from "react-confetti";
import Snowfall from "react-snowfall";
import SunEffect from "../SeasonAnim/SunEffect";
import RainEffect from "../SeasonAnim/RainEffect";
import FireworkEffect from "../SeasonAnim/FireworkEffect";

// Simple color confetti for Holi
const holiColors = [
  "#FF69B4", "#FF4500", "#FFD700", "#00FF00", "#00BFFF", "#8A2BE2",
  "#FF1493", "#FF6347", "#ADFF2F", "#40E0D0", "#FF00FF", "#00FFFF"
];

const getSeason = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const date = now.getDate();

  // Diwali: Example - November (month 11), adjust as per actual festival dates
  if (month === 11 && date >= 1 && date <= 20) return "diwali";
  // Holi: Example - March (month 3), adjust as per actual festival dates
  if (month === 3 && date >= 1 && date <= 15) return "holi";
  // Winter: December-February
  if (month === 12 || month === 1 || month === 2) return "winter";
  // Summer: April-June
  if (month >= 4 && month <= 6) return "summer";
  // Rainy: July-September
  if (month >= 7 && month <= 9) return "rainy";
  // Autumn: October-November (after Diwali)
  if ((month === 10) || (month === 11 && date > 20)) return "autumn";
  // Spring: March (after Holi) - April
  if ((month === 3 && date > 15)) return "spring";
  return "none";
};

const SeasonalAnimation = () => {
  const season = getSeason();

  switch (season) {
    case "winter":
      return <Snowfall snowflakeCount={100} />;
    case "summer":
      return <SunEffect />;
    case "rainy":
      return <RainEffect />;
    case "spring":
      return (
        <Confetti
          numberOfPieces={120}
          colors={["#FFB6C1", "#98FB98", "#E0FFFF", "#FFFACD"]}
          recycle={false}
        />
      );
    case "autumn":
      return (
        <Confetti
          numberOfPieces={100}
          colors={["#FF8C00", "#DEB887", "#D2691E", "#A0522D"]}
          recycle={false}
        />
      );
    case "diwali":
      return <FireworkEffect />;
    case "holi":
      return (
        <Confetti
          numberOfPieces={500}
          colors={holiColors}
          recycle={false}
        />
      );
    default:
      return null;
  }
};

export default SeasonalAnimation;