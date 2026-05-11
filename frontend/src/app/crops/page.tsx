"use client";

import { useState } from "react";

export default function CropsPage() {
  const [season, setSeason] = useState("");

  const [water, setWater] = useState("");

  const [recommendation, setRecommendation] = useState("");

  const handleRecommendation = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/crop-recommend", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          season,
          water,
        }),
      });

      const data = await response.json();

      setRecommendation(data.crop);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-sm
        min-h-screen
        bg-white
        p-6
      "
    >
      <h1
        className="
          text-3xl
          font-bold
          text-green-700
        "
      >
        🌾 Best Crop
      </h1>

      <div className="mt-8">
        <label className="font-semibold">Select Season</label>

        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="
              w-full
              mt-2
              p-4
              rounded-2xl
              border
            "
        >
          <option value="">Choose season</option>

          <option>Summer</option>

          <option>Rainy</option>

          <option>Winter</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="font-semibold">Water Availability</label>

        <select
          value={water}
          onChange={(e) => setWater(e.target.value)}
          className="
              w-full
              mt-2
              p-4
              rounded-2xl
              border
            "
        >
          <option value="">Choose water level</option>

          <option>Low</option>

          <option>Medium</option>

          <option>High</option>
        </select>
      </div>

      <button
        onClick={handleRecommendation}
        className="
            mt-8
            w-full
            bg-green-700
            text-white
            py-4
            rounded-2xl
            font-semibold
          "
      >
        Get Recommendation
      </button>

      {recommendation && (
        <div
          className="
            mt-8
            bg-green-100
            rounded-3xl
            p-5
          "
        >
          <h2
            className="
              text-xl
              font-bold
              text-green-800
            "
          >
            🌱 Recommended Crop
          </h2>

          <p
            className="
              mt-3
              text-lg
            "
          >
            {recommendation}
          </p>
        </div>
      )}
    </div>
  );
}
