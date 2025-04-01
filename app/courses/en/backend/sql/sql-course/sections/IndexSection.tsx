import { CodeExample } from "@/app/courses/en/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/en/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const indexExample = `-- Creating a simple index
CREATE INDEX idx_email ON users(email);

-- Creating a composite index
CREATE INDEX idx_name_dept ON employees(last_name, department);

-- Creating a unique index
CREATE UNIQUE INDEX idx_username ON users(username);`;

const keyPoints = [
  "Indexes speed up data retrieval operations",
  "They can be created on one or multiple columns",
  "Improve SELECT query performance",
  "Can be unique or non-unique",
  "Come with storage and maintenance overhead"
];

export function IndexSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Index</CardTitle>
        <CardDescription>Optimizing query performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">An index is a database structure that improves the speed of data retrieval operations. It works similar to a book's index, providing quick access to specific data.</p>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Types of Indexes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Single-column index:</strong> Created on one column</li>
            <li><strong>Composite index:</strong> Created on multiple columns</li>
            <li><strong>Unique index:</strong> Ensures no duplicate values</li>
            <li><strong>Clustered index:</strong> Determines physical order of data</li>
          </ul>
        </div>

        <CodeExample
          title="Index Creation Examples:"
          code={indexExample}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">When to Use Indexes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Frequently searched columns</li>
            <li>Columns used in WHERE clauses</li>
            <li>Columns used in JOIN conditions</li>
            <li>Columns used for sorting (ORDER BY)</li>
          </ul>
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}