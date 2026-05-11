type FeatureCardProps = {
  emoji: string;
  title: string;
  bgColor: string;
};

export default function FeatureCard({
  emoji,
  title,
  bgColor,
}: FeatureCardProps) {
  return (
    <div
      className={`${bgColor} rounded-3xl p-5 transition duration-300 hover:scale-105 active:scale-95 cursor-pointer`}
    >
      <div className="text-4xl">{emoji}</div>

      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
    </div>
  );
}
