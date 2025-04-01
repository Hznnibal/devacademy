import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 07 - Array</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Creating a Array</h2> <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          A array is created using the <code className="bg-gray-200 text-red-600">&lt;table&gt;</code> tag and closed with{" "}
          <code className="bg-gray-200 text-red-600">&lt;/table&gt;</code>. A array is composed of multiple rows enclosed within the{" "}
          <code className="bg-gray-200 text-red-600">&lt;tr&gt;</code> and <code className="bg-gray-200 text-red-600">&lt;/tr&gt;</code> tags. Each row contains several cells,
          enclosed by the <code className="bg-gray-200 text-red-600">&lt;td&gt;</code> and <code className="bg-gray-200 text-red-600">&lt;/td&gt;</code> tags.
        </p>

        <h3 className="text-xl font-semibold mb-4">HTML Array Code Example</h3>
        <CodeBlock code={`<table>
  <tbody>
    <tr>
      <td>John</td>
      <td>65,800</td>
      <td>53,200</td>
      <td>46,400</td>
    </tr>
    <tr>
      <td>Paul</td>
      <td>88,000</td>
      <td>51,500</td>
      <td>62,300</td>
    </tr>
    <tr>
      <td>Jack</td>
      <td>74,400</td>
      <td>64,200</td>
      <td>78,900</td>
    </tr>
  </tbody>
</table>`} />
        <p className="text-lg leading-relaxed mb-4">
          In the early days of the web, tables were used for layout (structuring content in rows and columns).
          This practice is now discouraged, as the <code className="bg-gray-200 text-red-600">&lt;table&gt;</code> tag should be reserved for presenting tabular data.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Caption</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A table can include a title (caption) using the <code className="bg-gray-200 text-red-600">&lt;caption&gt;</code> tag, which must be placed
          directly under the <code className="bg-gray-200 text-red-600">&lt;table&gt;</code> tag.
        </p>
        <CodeBlock code={`<table>
  <caption>Q1 Sales</caption>
  <tr>
    <td> ... </td>
  </tr>
</table>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Advanced Formatting</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-4">Headers</h3>
        <p className="text-lg leading-relaxed mb-4">
          Column headers are marked using <code className="bg-gray-200 text-red-600">&lt;th&gt;</code> tags enclosed within a{" "}
          <code className="bg-gray-200 text-red-600">&lt;thead&gt;</code> tag and a <code className="bg-gray-200 text-red-600">&lt;tr&gt;</code> row.
        </p>
        <CodeBlock code={`<table>
  <caption>Q1 Sales</caption>
  <thead>
    <tr>
      <th>-</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
    </tr>
  </thead>
</table>`} />

        <h3 className="text-xl font-semibold mb-4">Footers</h3>
        <p className="text-lg leading-relaxed mb-4">
          The <code className="bg-gray-200 text-red-600">&lt;tfoot&gt;</code> tag is used to specify footer cells in a table,
          for example, the total of column values in a numeric table.
        </p>
        <CodeBlock code={`<tfoot>
  <tr>
    <td>Total</td>
    <td>228,200</td>
    <td>168,900</td>
    <td>187,600</td>
  </tr>
</tfoot>`} />

        <h3 className="text-xl font-semibold mb-4">The <code className="bg-gray-200 text-red-600">&lt;tbody&gt;</code> Tag</h3>
        <p className="text-lg leading-relaxed mb-4">
          The <code className="bg-gray-200 text-red-600">&lt;tbody&gt;</code> tag defines the main content (body) of the table.
        </p>
        <CodeBlock code={`<table>
  <thead> ... </thead>
  <tbody>
    <tr>
      <td>Total</td>
      <td>228,200</td>
      <td>168,900</td>
      <td>187,600</td>
    </tr>
  </tbody>
  <tfoot> ... </tfoot>
</table>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Merging Rows/Columns</h2> <div className="border-b border-gray-300 mb-6" />


        <h3 className="text-xl font-semibold mb-4">The <code>colspan</code> Attribute</h3>
        <p className="text-lg leading-relaxed mb-4">
          The <code>colspan</code> attribute allows merging multiple columns. For example, a cell spanning 4 columns:
        </p>
        <CodeBlock code={`<td colspan="4">Q1 Sales</td>`} />

        <h3 className="text-xl font-semibold mb-4">The <code>rowspan</code> Attribute</h3>
        <p className="text-lg leading-relaxed mb-4">
          The <code>rowspan</code> attribute allows merging multiple rows. For example, a cell spanning 2 rows:
        </p>
        <CodeBlock code={`<td rowspan="2">Total</td>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Exercises</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-4">Exercise 1</h3>
        <p className="text-lg leading-relaxed mb-4">
          Add the <code>&lt;caption&gt;</code> tag to your HTML file and observe its effect.
        </p>

        <h3 className="text-xl font-semibold mb-4">Exercise 2</h3>
        <p className="text-lg leading-relaxed mb-4">
          Add the <code>&lt;tbody&gt;</code> tag and observe its effect on your table.
        </p>
      </section>
    </div>

  );
};

export default Page;
