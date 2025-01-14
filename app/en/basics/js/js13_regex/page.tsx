import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSRegularExpressions() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 15: Regular Expressions</h1>

      {/* Introduction to Regular Expressions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> What Are Regular Expressions?</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          A regular expression (or "regex") is a sequence of characters that define a search pattern. They are commonly used for:
        </p>
        <ul className="list-disc pl-8">
          <li>Validating strings (e.g., ensuring only numbers or specific characters are present)</li>
          <li>Searching for specific words or portions of text within a string</li>
          <li>Replacing characters or words in a string</li>
        </ul>
        <p className="text-lg">
          Regular expressions act as a filter or constraint applied to a string to either check if it matches the pattern or to manipulate it. They exist in various programming languages (JavaScript, PHP, C#, etc.), with syntax generally being consistent but the execution functions varying between languages.
        </p>
      </section>

      {/* Example of Regular Expression */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Simple Example of Regular Expression</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Here's a basic example of a regular expression that checks if the word "javascript" consists only of lowercase letters:
        </p>
        <CodeBlock code={`var filter = new RegExp("^[a-z]+$");
var result = filter.test("javascript");
console.log(result);`} />
        <p className="text-lg">
          In this example:
        </p>
        <ul className="list-disc pl-8">
          <li>Line 1 creates a filter using <code>RegExp</code>, a JavaScript object that takes a regular expression pattern as a string. The pattern used is <code>^[a-z]+$</code>.</li>
          <li>Line 2 uses the <code>test()</code> method of the <code>RegExp</code> object to evaluate the string "javascript". It returns <code>true</code> because the string meets the condition (only lowercase letters).</li>
        </ul>
        <p className="text-lg">
          The expression <code>^[a-z]+$</code> ensures that the string consists only of lowercase letters from A to Z.
        </p>
      </section >

      {/* Resources for Learning */} {/*TODO*/}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Additional Resources</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Here are some resources to help you learn more about regular expressions:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <a href="https://regexr.com/" className="text-blue-500">
              Regexr: Interactive Regex Testing and Debugging Tool
            </a> - A tool to learn, build, and test regular expressions.
          </li>
          <li>
            <a href="https://regex101.com/" className="text-blue-500">
              REGEX 101: Online Regex Builder and Tester
            </a> - A powerful online tool to build and test regular expressions, with explanations.
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" className="text-blue-500">
              MDN Web Docs: Regular Expressions
            </a> - Comprehensive documentation on regular expressions in JavaScript.
          </li>
          <li>
            <a href="https://www.regexone.com/" className="text-blue-500">
              RegexOne: Learn Regular Expressions with Interactive Lessons
            </a> - Offers simple, interactive exercises to help you learn regular expressions.
          </li>
          <li>
            <a href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/" className="text-blue-500">
              Regular Expressions Cheat Sheet by DaveChild
            </a> - A handy reference guide with syntax, symbols, and sample patterns.
          </li>
        </ul>
      </section>


      {/* Writing Regular Expressions */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Writing Regular Expressions</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          There are two main types of characters used in regular expressions:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>META Characters</strong>: Special characters like <code>.</code>, <code>\</code>, <code>?</code>, <code>*</code>, <code>+</code>, <code>{`{`}</code>, <code>{`}`}</code>, <code>(</code>, <code>)</code>, <code>[</code>, <code>]</code>. These are used to define complex patterns.
          </li>
          <li>
            <strong>Normal Characters</strong>: Any other character, including letters, numbers, and symbols, which are treated literally unless escaped.
          </li>
        </ul>
        <p className="text-lg">
          For example, to match alphabetic characters (excluding accented letters), you can use:
        </p>
        <CodeBlock code={`/[A-Za-z]/`} />
        <p className="text-lg">
          To ensure that a string contains only alphabetic characters, you would use:
        </p>
        <CodeBlock code={`/^[A-Za-z]+$/`} />
        <p className="text-lg">
          Here, <code>^</code> denotes the start of the string, <code>[A-Za-z]</code> matches any alphabet character, <code>+</code> means one or more of the preceding characters, and <code>$</code> denotes the end of the string.
        </p>
      </section >

      {/* Matching Numbers */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Matching Numeric Strings</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          To match a numeric string (i.e., only digits), you can use:
        </p>
        <CodeBlock code={`/^[0-9]*$/`} />
        <p className="text-lg">
          This regular expression checks that the string consists only of digits from 0 to 9. The <code>\d</code> shorthand can also be used in place of <code>[0-9]</code>, and <code>*</code> means the number of digits can be zero or more (the string can even be empty).
        </p>
        <p className="text-lg">
          If you want to ensure at least one digit, you can replace the <code>*</code> with <code>+</code>.
        </p>
      </section >
      {/* Dates */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Dates</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          To validate a date in the format <code>dd/mm/yyyy</code>, we can use the following regular expression:
        </p>
        <CodeBlock code={`/^[0-9]+\/[0-9]+\/[0-9]+$/`} />
        <p className="text-lg">
          In this expression:
          <ul className="list-disc pl-8">
            <li><code>[0-9]+</code>: Represents one or more digits (for the day, month, and year).</li>
            <li><code>\/</code>: We need to escape the slash (/) using a backslash (<code>\</code>) because it is used to delimit the regular expression.</li>
          </ul>
        </p>

        <p className="text-lg">
          To make the day, month, and year more flexible (allowing 1 or 2 digits for the day and month, and 2 or 4 digits for the year), we use this regular expression:
        </p>
        <CodeBlock code={`/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9]([0-9][0-9])?$/`} />
        <p className="text-lg">
          Key points:
        </p>
        <ul className="list-disc pl-8">
          <li><code>?</code>: Indicates that the previous character (digit) can appear 0 or 1 time.</li>
          <li><code>([0-9][0-9])?</code>: The two digits for the year can be optional, allowing both 2-digit and 4-digit year formats.</li>
        </ul>

        <p className="text-lg">
          If you want to use other separators (like a dash, dot, etc.), you can modify the expression like this:
        </p>
        <CodeBlock code={`/(\/|-|\.)/`} />
      </section >

      {/* Email Addresses */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Email Addresses</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          A valid email address, like <code>nom.prenom@site.fr</code>, can be validated with this regular expression:
        </p>
        <CodeBlock code={`^[a-z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$`} />
        <p className="text-lg">
          This expression validates the following parts of the email address:
        </p>
        <ul className="list-disc pl-8">
          <li>The user part: <code>[_a-z0-9-]+(.[_a-z0-9-]+)</code>, allowing alphanumeric characters, underscores, and hyphens.</li>
          <li>The domain name part: <code>[a-z0-9-]+</code>, allowing only alphanumeric characters, underscores, and hyphens.</li>
          <li>The top-level domain (TLD): <code>(\.[a-z0-9]+)</code>, consisting of a period followed by alphanumeric characters.</li>
        </ul>
      </section >

      {/* Phone Numbers */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Phone Numbers</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          To validate phone numbers in the format <code>0111111111</code> (without spaces or symbols):
        </p>
        <CodeBlock code={`^0[1-9]{9}$`} />
        <p className="text-lg">
          For phone numbers that may include separators (like dots, spaces, or hyphens), use this expression:
        </p>
        <CodeBlock code={`^0[1-9]([-. ]?[0-9]{2}){4}$`} />
        <p className="text-lg">
          This expression ensures that:</p>
        <ul className="list-disc pl-8">
          <li>The first digit is a 0, followed by a number from 1 to 9.</li>
          <li>The next four groups consist of optional separators followed by two digits (e.g., <code>01-11-11-11-11</code>).</li>
        </ul>
      </section >

      {/* Other Cases */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Other Cases</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Here are some additional cases and their regular expressions:
        </p>
        <ul className="list-disc pl-8">
          <li><strong>Alphanumeric String:</strong> Allows letters and numbers, including underscores:
            <CodeBlock code={`/^[0-9A-Za-z]+$/`} />
          </li>
          <li><strong>Color Code:</strong> A hexadecimal color code starting with a <code>#</code> and followed by numbers or letters from A to F:
            <CodeBlock code={`/^#[0-9A-F]+$/`} />
          </li>
        </ul>
      </section >
      {/* Special Characters */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Special Characters</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Below are the most commonly used special characters in regular expressions:
        </p>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-sm font-semibold text-left ">
              <th className="px-4 py-2">Character</th>
              <th className="px-4 py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">\\</td>
              <td className="px-4 py-2">Escapes the following character (e.g., <code>\*</code> means a literal asterisk).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">^</td>
              <td className="px-4 py-2">Indicates the start of the string to match.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">$</td>
              <td className="px-4 py-2">Indicates the end of the string to match.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">*</td>
              <td className="px-4 py-2">Matches the previous character 0 or more times.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">+</td>
              <td className="px-4 py-2">Matches the previous character 1 or more times.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">?</td>
              <td className="px-4 py-2">Matches the previous character 0 or 1 time.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">(x)</td>
              <td className="px-4 py-2">Captures the character for later reference, useful in functions like <code>exec</code>.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">|</td>
              <td className="px-4 py-2">Matches either the expression before or after it (logical OR).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">&#123;n&#125;</td>
              <td className="px-4 py-2">Matches the previous character exactly n times.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">&#123;n, p&#125;</td>
              <td className="px-4 py-2">Matches the previous character at least n times but at most p times.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">[abc]</td>
              <td className="px-4 py-2">Matches any character inside the brackets (e.g., a, b, or c).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">[^abc]</td>
              <td className="px-4 py-2">Matches any character except those inside the brackets (not a, b, or c).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\s</td>
              <td className="px-4 py-2">Matches any whitespace character (space, tab, newline).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\S</td>
              <td className="px-4 py-2">Matches any character except whitespace.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\d</td>
              <td className="px-4 py-2">Matches any digit (equivalent to <code>[0-9]</code>).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\D</td>
              <td className="px-4 py-2">Matches any non-digit character.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\w</td>
              <td className="px-4 py-2">Matches any alphanumeric character (letters, digits, and underscore).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\W</td>
              <td className="px-4 py-2">Matches any character that is not alphanumeric or underscore.</td>
            </tr>
          </tbody>
        </table>
      </section >

      {/* Functions */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Regular Expression Functions</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Regular expressions also come with several useful functions that allow you to test, manipulate, and extract data from strings.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>test()</strong> – Returns <code>true</code> if the string matches the regular expression, otherwise <code>false</code>.
            <CodeBlock code={`regex.test('string');`} />
          </li>
          <li>
            <strong>exec()</strong> – Executes the regular expression and returns an array of matches, or <code>null</code> if no matches are found.
            <CodeBlock code={`regex.exec('string');`} />
          </li>
          <li>
            <strong>match()</strong> – Similar to <code>exec()</code>, but returns an array of matches directly.
            <CodeBlock code={`'string'.match(regex);`} />
          </li>
          <li>
            <strong>replace()</strong> – Replaces matches of the regular expression with a specified replacement string.
            <CodeBlock code={`'string'.replace(regex, 'replacement');`} />
          </li>
          <li>
            <strong>search()</strong> – Returns the position of the first match, or <code>-1</code> if no match is found.
            <CodeBlock code={`'string'.search(regex);`} />
          </li>
          <li>
            <strong>split()</strong> – Splits the string into an array of substrings based on the regular expression.
            <CodeBlock code={`'string'.split(regex);`} />
          </li>
        </ul>
      </section >
    </div >
  );
}
