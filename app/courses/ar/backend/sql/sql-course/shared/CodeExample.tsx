interface CodeExampleProps {
  title: string;
  code: string;
}

export function CodeExample({ title, code }: CodeExampleProps) {
  return (
    <div className="bg-muted p-4 rounded-lg overflow-x-auto">
      <div className="font-mono text-sm">
        <p className="text-primary mb-2">{title}</p>
        <pre className="bg-black text-blue-50 p-4 rounded">{code}</pre>
      </div>
    </div>
  );
}