interface KeyPointsProps {
  title?: string;
  points: string[];
}

export function KeyPoints({ title = "Key Points:", points }: KeyPointsProps) {
  return (
    <div className="mt-4 grid gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="list-disc pl-6 space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}