"use client";

import { useState } from "react";

type SpeechRecognitionResultEvent = Event & {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
};

type SpeechRecognitionErrorEvent = Event & {
  error: string;
};

type SpeechRecognitionInstance = {
  lang: string;
  start: () => void;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

type SpeechRecognitionWindow = Window & {
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
  SpeechRecognition?: SpeechRecognitionConstructor;
};

export default function VoiceInput() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    console.log("Start button clicked");
    const browserWindow = window as SpeechRecognitionWindow;
    const SpeechRecognition =
      browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");

      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "te-IN";

    recognition.start();
    console.log("Recognition started");

    setIsListening(true);

    recognition.onresult = (event) => {
      console.log(event);
      const text = event.results[0][0].transcript;

      setTranscript(text);
      setIsListening(false);
    };
    recognition.onerror = (event) => {
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
