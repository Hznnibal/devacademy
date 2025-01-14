import { CodeExample } from "@/components/sql-course/shared/CodeExample";
import { KeyPoints } from "@/components/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tableCreationCode = `CREATE TABLE users (
    id INT,
    name VARCHAR(50),
    email VARCHAR(100),
    registration_date DATE
);`;

const keyPoints = [
  "Each table has a unique name in the database",
  "A table contains columns with defined data types",
  "Data is organized in rows",
  "A table typically represents a concept or entity"
];

export function TableSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table</CardTitle>
        <CardDescription>Fundamental structure for storing data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg leading-relaxed mb-4">A table is a structure that organizes data into rows and columns, similar to a spreadsheet. Each table represents a specific entity in your application.</p>
        <CodeExample
          title="Table Creation Example:"
          code={tableCreationCode}
        />
        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}