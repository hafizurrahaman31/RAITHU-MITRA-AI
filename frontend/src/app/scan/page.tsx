"use client";
import { useState } from "react";

export default function ScanPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const speakResult = (text: string) => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();

    console.log(voices);

    const teluguVoice = voices.find((voice) => voice.lang === "te-IN");

    if (teluguVoice) {
      speech.voice = teluguVoice;
    }

    speech.lang = "te-IN";

    speech.rate = 0.9;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
      const existingHistory = JSON.parse(
        localStorage.getItem("scanHistory") || "[]",
      );

      const newEntry = {
        prediction: data.prediction,
        confidence: data.confidence,
        pesticide: data.pesticide,
        date: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "scanHistory",
        JSON.stringify([newEntry, ...existingHistory]),
      );
      speakResult(`వ్యాధి ${data.prediction}. మందు ${data.pesticide}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative w-full max-w-sm min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-green-700">📷 Scan Plant</h1>

      <div className="mt-8">
        <label
          htmlFor="plant-image"
          className="
      border-2
      border-dashed
      border-green-300
      rounded-3xl
      h-72
      flex
      items-center
      justify-center
      overflow-hidden
      cursor-pointer
      bg-green-50
      transition
      duration-300
      active:scale-[0.98]
    "
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Plant"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <p className="text-5xl">📷</p>

              <p className="text-gray-500 mt-4">Tap to Upload Plant Image</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              handleImageChange(event);
              handleUpload(event);
            }}
            id="plant-image"
          />
        </label>
      </div>
      {loading && <p className="mt-4 text-green-700">Uploading image...</p>}

      {result && (
        <div className="mt-6 bg-green-100 rounded-3xl p-5">
          <h2 className="text-xl font-bold text-green-800">
            🌿 {result.prediction}
          </h2>

          <p className="mt-2 text-gray-700">Confidence: {result.confidence}%</p>

          <div className="mt-4">
            <h3 className="font-semibold">💊 Recommended Pesticide</h3>

            <p className="text-gray-700 mt-1">{result.pesticide}</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">🛡 Prevention Tips</h3>

            <ul className="mt-2 space-y-2">
              {result.tips.map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() =>
              speakResult(
                `వ్యాధి ${result.prediction}.
       మందు ${result.pesticide}`,
              )
            }
            className="
    mt-5
    w-full
    bg-green-700
    text-white
    py-3
    rounded-2xl
    font-semibold
    transition
    duration-300
    active:scale-95
  "
          >
            🔊 Listen in Telugu
          </button>
        </div>
      )}

      
    </div>
  );
}
