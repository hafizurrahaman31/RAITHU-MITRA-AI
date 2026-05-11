export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1
        className="
        text-3xl
        font-bold
        text-green-700
      "
      >
        👤 Farmer Profile
      </h1>

      <div
        className="
        mt-8
        bg-green-100
        rounded-3xl
        p-5
      "
      >
        <div
          className="
          flex
          items-center
          gap-4
        "
        >
          <div
            className="
            w-16
            h-16
            rounded-full
            bg-green-600
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
          "
          >
            H
          </div>

          <div>
            <h2
              className="
              text-xl
              font-bold
              text-green-800
            "
            >
              Hafizur Rahaman
            </h2>

            <p className="text-gray-600">Farmer • Andhra Pradesh</p>
          </div>
        </div>
      </div>

      <div
        className="
        mt-6
        bg-white
        border
        rounded-3xl
        p-5
        shadow-sm
      "
      >
        <h3
          className="
          text-lg
          font-semibold
        "
        >
          🌐 Language
        </h3>

        <p
          className="
          mt-2
          text-gray-600
        "
        >
          Telugu
        </p>
      </div>

      <div
        className="
        mt-6
        bg-white
        border
        rounded-3xl
        p-5
        shadow-sm
      "
      >
        <h3
          className="
          text-lg
          font-semibold
        "
        >
          📍 Farm Location
        </h3>

        <p
          className="
          mt-2
          text-gray-600
        "
        >
          Andhra Pradesh, India
        </p>
      </div>

      <div
        className="
        mt-6
        bg-white
        border
        rounded-3xl
        p-5
        shadow-sm
      "
      >
        <h3
          className="
          text-lg
          font-semibold
        "
        >
          🚨 Emergency Contact
        </h3>

        <p
          className="
          mt-2
          text-gray-600
        "
        >
          +91 9876543210
        </p>
      </div>
    </div>
  );
}
