"use client";

import { useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import HeroCard from "@/components/HeroCard";
import Section from "@/components/Section";
import WeatherCard from "@/components/WeatherCard";
import { translations } from "@/lib/translations";
import VoiceInput from "@/components/VoiceInput";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [location, setLocation] = useState<any>(null);
  const [locationError, setLocationError] = useState("");
  const t = translations[language as keyof typeof translations];
  const features = [
    {
      emoji: "📷",
      title: t.scan,
      bgColor: "bg-green-100",
    },

    {
      emoji: "🌾",
      title: t.crops,
      bgColor: "bg-yellow-100",
    },

    {
      emoji: "🚨",
      title: t.emergency,
      bgColor: "bg-red-100",
    },

    {
      emoji: "☁",
      title: t.weather,
      bgColor: "bg-blue-100",
    },
  ];

  const handleSOS = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,

          longitude: position.coords.longitude,
        });

        setLocationError("");
      },

      () => {
        setLocationError("Unable to access location");
      },
    );
  };

  return (
    <div>
      <header className="px-6 pt-8 pb-2">
        <div
          className="
    flex
    items-center
    justify-between
  "
        >
          <div>
            <h1
              className="
        text-3xl
        font-bold
        text-green-700
      "
            >
              రైతు మిత్ర AI 🌿
            </h1>

            <p className="text-gray-500 mt-1">Smart Farming Assistant</p>
          </div>

          <button
            onClick={() => setLanguage(language === "en" ? "te" : "en")}
            className="
        bg-green-100
        text-green-700
        px-2
        py-2
        rounded-xl
        text-sm
        font-semibold
        shadow-sm
      "
          >
            🌐 {language === "en" ? "తెలుగు" : "English"}
          </button>
        </div>
      </header>

      <HeroCard />
      <section className="px-6 mt-6">
        <WeatherCard />
      </section>

      <Section>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              emoji={feature.emoji}
              title={feature.title}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </Section>
      <Section>
        <VoiceInput />
      </Section>
      {location && (
        <Section>
          <div
            className="
      bg-red-100
      rounded-3xl
      p-5
    "
          >
            <h2
              className="
        text-xl
        font-bold
        text-red-700
      "
            >
              🚨 Emergency Location
            </h2>

            <p className="mt-3">
              Latitude:
              {location.latitude}
            </p>

            <p className="mt-2">
              Longitude:
              {location.longitude}
            </p>

            <a
              href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
              target="_blank"
              className="
          block
          mt-4
          bg-red-500
          text-white
          text-center
          py-3
          rounded-2xl
        "
            >
              Open in Maps
            </a>
          </div>
        </Section>
      )}
      {locationError && (

  <p className="
    px-6
    mt-4
    text-red-600
  ">
    {locationError}
  </p>

)}

      <button
        className="
    fixed
    bottom-24
    left-1/2
    translate-x-[140px]
    bg-red-500
    text-white
    w-16
    h-16
    rounded-full
    text-3xl
    shadow-lg
    transition
    duration-300
    hover:scale-110
    active:scale-95
    z-50
  "
        onClick={handleSOS}
      >
        🚨
      </button>
    </div>
  );
}
