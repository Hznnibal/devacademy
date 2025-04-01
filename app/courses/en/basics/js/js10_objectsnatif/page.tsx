import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSNativeObjects() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 12: Native Objects</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Introduction</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Objects are essential components of JavaScript. They consist of properties (variables) and methods (functions).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          JavaScript comes with its own built-in objects, known as "native objects".
        </p>
      </section>

      {/* String Object */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">The String Object</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The String object is very useful for manipulating text. You can create a String object as follows:
        </p>
        <CodeBlock code={`var str = new String("example");
var str = "example"; // Any string is a String object.`} />
        <p className="text-lg leading-relaxed mb-4">The position of the first character in a string is 0.</p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>length</strong>: Property that indicates the length of the string.
          </li>
          <li>
            <strong>charAt(int)</strong>: Returns the character at the specified index.
          </li>
          <li>
            <strong>indexOf(string, int)</strong>: Returns the position of a substring starting from a given index (default is 0).
          </li>
          <li>
            <strong>lastIndexOf(string, int)</strong>: Returns the position of a substring starting from a given index, searching backwards.
          </li>
          <li>
            <strong>match(regExp)</strong>: Returns an array if the regular expression matches the string, or null otherwise.
          </li>
          <li>
            <strong>replace(regExp, string)</strong>: Replaces the matched expression with the given string.
          </li>
          <li>
            <strong>substring(x, y)</strong>: Returns a substring between positions x and (y-1).
          </li>
          <li>
            <strong>toLowerCase()</strong>: Converts all characters to lowercase.
          </li>
          <li>
            <strong>toUpperCase()</strong>: Converts all characters to uppercase.
          </li>
        </ul>
      </section >

      {/* Math Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The Math Object</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The Math object is used for performing mathematical operations. Its methods and properties are accessed directly without creating an instance.
        </p>
        <CodeBlock code={`var maxVal = Math.max(10, 20);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>abs(x)</strong>: Returns the absolute value of x.</li>
          <li><strong>ceil(x)</strong>: Returns the smallest integer greater than or equal to x.</li>
          <li><strong>floor(x)</strong>: Returns the largest integer less than or equal to x.</li>
          <li><strong>round(x)</strong>: Rounds x to the nearest integer.</li>
          <li><strong>max(x, y)</strong>: Returns the larger of the two numbers.</li>
          <li><strong>min(x, y)</strong>: Returns the smaller of the two numbers.</li>
          <li><strong>pow(x, y)</strong>: Calculates x raised to the power of y.</li>
          <li><strong>sqrt(x)</strong>: Calculates the square root of x.</li>
          <li><strong>random()</strong>: Returns a random number between 0 and 1.</li>
        </ul>
      </section >

      {/* Date Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The Date Object</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The Date object is used for handling dates and times. You can create a Date object in several ways:
        </p>
        <CodeBlock code={`var myDate = new Date(); // Current date
var myDate = new Date(milliseconds); // Date since January 1, 1970
var myDate = new Date(year, month, day);
var myDate = new Date(year, month, day, hour, minute, second);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>getYear()</strong>: Returns the last two digits of the year.</li>
          <li><strong>getMonth()</strong>: Returns the month (0 to 11).</li>
          <li><strong>getDate()</strong>: Returns the day of the month (1 to 31).</li>
          <li><strong>getDay()</strong>: Returns the day of the week (0 for Sunday).</li>
          <li><strong>getHours()</strong>: Returns the hour (0 to 23).</li>
          <li><strong>getMinutes()</strong>: Returns the minutes (0 to 59).</li>
          <li><strong>getSeconds()</strong>: Returns the seconds (0 to 59).</li>
          <li><strong>getTime()</strong>: Returns the time in milliseconds since January 1, 1970.</li>
          <li><strong>toLocaleString()</strong>: Returns the date as a string in the local format.</li>
        </ul>
      </section >

      {/* Date Object Example */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The Date Object:Example</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The Date object is used to handle and manipulate dates. Below is an example showing various ways to create and work with Date objects:
        </p>
        <CodeBlock code={`<script>
var myDate1 = new Date();  // Current date
var myDate2 = new Date(3600 * 24 * 365 * 40); // Date from Jan 1, 1970
var myDate3 = new Date(2012, 9, 19);
var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
var myDate5 = new Date("Jan 1, 2000 00:00:00");

console.log('new Date(): ' + myDate1.toLocaleString());
console.log('new Date(3600 * 24 * 365 * 40): ' + myDate2.toLocaleString());
console.log('new Date(2012, 9, 19): ' + myDate3.toLocaleString());
console.log('new Date(2012, 9, 19, 10, 33, 12): ' + myDate4.toLocaleString());
console.log('new Date("Jan 1, 2000 00:00:00"): ' + myDate5.toLocaleString());

var year = 1900 + myDate1.getYear();
var month = myDate1.getMonth() + 1;
var day = myDate1.getDate();
console.log('Current Date: ' + day + "/" + month + "/" + year);
</script>`} />
      </section >

      {/* Array Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The Array Object</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The Array object allows you to store and manipulate lists of data. Here are some basic examples:
        </p>
        <CodeBlock code={`var array1 = new Array(10);  // An array with 10 empty elements
var array2 = new Array(1, 2, 3, 4);  // Array with predefined values
array1[0] = "First Element"; // Assign value to index 0`} />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript arrays are dynamic. You can manipulate them using various methods:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>length</strong>: Returns the number of elements.</li>
          <li><strong>join(string)</strong>: Combines elements into a string, separated by the specified string.</li>
          <li><strong>reverse()</strong>: Reverses the array order.</li>
          <li><strong>sort()</strong>: Sorts elements alphabetically.</li>
          <li><strong>push()</strong>: Adds an element to the end of the array.</li>
          <li><strong>pop()</strong>: Removes the last element.</li>
          <li><strong>unshift()</strong>: Adds an element to the beginning.</li>
          <li><strong>shift()</strong>: Removes the first element.</li>
          <li><strong>slice(start, end)</strong>: Returns a portion of the array.</li>
        </ul>
      </section >

      {/* Image Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The Image Object</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The Image object allows JavaScript to preload images, improving visual effects and reducing display time.
        </p>
        <CodeBlock code={`var img1 = new Image();
img1.src = "images/logo2.gif";

<img src="images/logo1.gif" onMouseOver="this.src=img1.src;">`} />
        <p className="text-lg leading-relaxed mb-4">
          The object has properties such as <strong>name</strong>, <strong>height</strong>, <strong>width</strong>, <strong>hspace</strong>, and <strong>vspace</strong>.
        </p>
      </section >

      {/* Exercise */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Exercise</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Write a program that accepts numeric values (using <code>window.prompt</code>), stores them in an array, and stops when the user enters 0. Then, display:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>The number of values entered.</li>
          <li>The sum of the values.</li>
          <li>The average of the values.</li>
        </ul>
      </section >
    </div >
  );
}
