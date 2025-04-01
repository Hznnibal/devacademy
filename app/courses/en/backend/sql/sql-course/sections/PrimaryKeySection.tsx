import { CodeExample } from "@/app/courses/en/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/en/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const primaryKeyExample = `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const compositeKeyExample = `CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    PRIMARY KEY (order_id, product_id)
);`;

const keyPoints = [
  "A primary key uniquely identifies each row in a table",
  "It cannot contain NULL values and must be unique",
  "Usually auto-incrementing integers are used",
  "Can be single column or composite (multiple columns)",
  "Essential for maintaining data integrity"
];

export function PrimaryKeySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Primary Key</CardTitle>
        <CardDescription>Unique identifier for table records</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">A primary key is a column or combination of columns that uniquely identifies each row in a table. It's fundamental for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensuring data integrity</li>
          <li>Creating relationships between tables</li>
          <li>Optimizing database performance</li>
        </ul>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Single Column Primary Key</h3>
          <CodeExample
            title="Example with AUTO_INCREMENT:"
            code={primaryKeyExample}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Composite Primary Key</h3>
          <CodeExample
            title="Example with multiple columns:"
            code={compositeKeyExample}
          />
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}