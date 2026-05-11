import Link from "next/link";

export default function HeroCard() {
  return (
    <section className="px-6 mt-4">
      <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-3xl p-6 text-white shadow-lg">
        <p className="text-sm opacity-90">Welcome Back 👋</p>

        <h2 className="text-2xl font-bold mt-2 leading-snug">
          Smart Farming <br />
          Assistant
        </h2>

        <button className="mt-6 bg-white text-green-700 px-5 py-3 rounded-2xl font-semibold w-full transition duration-300 hover:scale-[1.02] active:scale-95">
          <Link href="/scan">📷 Scan Plant</Link>
        </button>
      </div>
    </section>
  );
}
