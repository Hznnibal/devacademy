import { CodeExample } from "@/components/sql-course/shared/CodeExample";
import { KeyPoints } from "@/components/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tableExample = `-- Table structure
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Sample data (rows)
INSERT INTO employees VALUES
(1, 'John Doe', 'Engineering', 75000.00),
(2, 'Jane Smith', 'Marketing', 65000.00);`;

const keyPoints = [
  "Rows represent individual records in a table",
  "Each row contains data for all columns in the table",
  "Columns define the structure and data type of each field",
  "Column names must be unique within a table"
];

export function RowsColumnsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rows and Columns</CardTitle>
        <CardDescription>Understanding table structure and data organization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Columns (Fields)</h3>
          <p className="text-lg leading-relaxed mb-4">Columns define the structure of your table. Each column has:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A unique name within the table</li>
            <li>A specific data type</li>
            <li>Optional constraints (e.g., NOT NULL, UNIQUE)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Rows (Records)</h3>
          <p className="text-lg leading-relaxed mb-4">Rows contain the actual data in your table. Each row:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Represents one complete record</li>
            <li>Must provide values that match column definitions</li>
            <li>Is uniquely identifiable (usually by a primary key)</li>
          </ul>
        </div>

        <CodeExample
          title="Example Table with Rows:"
          code={tableExample}
        />

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}