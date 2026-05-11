"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {

  const [history, setHistory] =
    useState < any[] > ([]);

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem(
          "scanHistory"
        ) || "[]"
      );

    setHistory(savedHistory);

  }, []);

  return (

    <div className="p-6">

      <h1 className="
        text-3xl
        font-bold
        text-green-700
      ">
        📜 Scan History
      </h1>

      {history.length === 0 && (

        <p className="
          mt-6
          text-gray-500
        ">
          No scan history found.
        </p>

      )}

      <div className="
        mt-6
        space-y-4
      ">

        {history.map(
          (item, index) => (

            <div
              key={index}
              className="
                bg-white
                border
                rounded-3xl
                p-5
                shadow-sm
              "
            >

              <h2 className="
                text-lg
                font-bold
                text-green-700
              ">
                🌿 {item.prediction}
              </h2>

              <p className="
                mt-2
                text-gray-600
              ">
                Confidence:
                {item.confidence}%
              </p>

              <p className="
                mt-2
                text-gray-600
              ">
                💊 {item.pesticide}
              </p>

              <p className="
                mt-3
                text-sm
                text-gray-400
              ">
                {item.date}
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}