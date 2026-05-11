"use client";

import { useState } from "react";

export default function VoiceInput() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    console.log("Start button clicked");
    const SpeechRecognition = (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");

      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "te-IN";

    recognition.start();
    console.log("Recognition started");

    setIsListening(true);

    recognition.onresult = (event: any) => {
      console.log(event);
      const text = event.results[0][0].transcript;

      setTranscript(text);
      setIsListening(false);
    };
    recognition.onerror = (event: any) => {
      console.log("Speech recognition error:", event.error);

      setIsListening(false);
    };
  };

  return (
    <div
      className="
      bg-white
      border
      rounded-3xl
      p-5
      shadow-sm
    "
    >
      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <div>
          <h2
            className="
            text-lg
            font-semibold
          "
          >
            🎙 Voice Assistant
          </h2>

          <p
            className="
            text-gray-500
            text-sm
            mt-1
          "
          >
            Speak in Telugu
          </p>
        </div>

        <button
          onClick={startListening}
          className={`
    text-white
    px-4
    py-2
    rounded-xl
    font-semibold
    transition
    ${isListening ? "bg-red-500" : "bg-green-600"}
  `}
        >
          {isListening ? "Listening..." : "Start"}
        </button>
      </div>

      {transcript && (
        <div
          className="
          mt-4
          bg-green-50
          rounded-2xl
          p-4
        "
        >
          <p
            className="
            text-gray-700
          "
          >
            {transcript}
          </p>
        </div>
      )}
    </div>
  );
}
