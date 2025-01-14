import { CodeExample } from "@/components/sql-course/shared/CodeExample";
import { KeyPoints } from "@/components/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const foreignKeyExample = `-- Parent table
CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- Child table with foreign key
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    nodep INT,
    FOREIGN KEY (nodep) 
    REFERENCES departments(id)
);`;

const keyPoints = [
  "Foreign keys create relationships between tables",
  "They ensure referential integrity",
  "Must reference a primary key (or unique key) in another table",
  "Can be used to cascade updates and deletes",
  "Help maintain data consistency across tables"
];

export function ForeignKeySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Foreign Key</CardTitle>
        <CardDescription>Creating relationships between tables</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">A foreign key is a column or set of columns that creates a link between data in two tables. It:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>References a primary key in another table</li>
          <li>Maintains referential integrity</li>
          <li>Enables data relationships and joins</li>
        </ul>

        <CodeExample
          title="Foreign Key Example:"
          code={foreignKeyExample}
        />


        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>One-to-Many relationships (e.g., Department → Employees)</li>
            <li>Many-to-Many relationships (using junction tables)</li>
            <li>Ensuring data consistency across related tables</li>
          </ul>
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}