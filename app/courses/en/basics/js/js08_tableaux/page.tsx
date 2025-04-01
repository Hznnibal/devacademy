import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ArraysPage() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 10: Arrays</h1>

      {/* Objectives */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Objectives</h2> <div className="border-b border-gray-300 mb-6" />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Discover and understand the concept of arrays.</li>
          <li>Create and manipulate arrays and the data they contain.</li>
          <li>Learn common array manipulation functions.</li>
        </ul>
      </section>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definition</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Imagine that in a program, we need to store 12 values simultaneously, for example, grades to calculate an average.
          Obviously, the only solution we have right now is to declare twelve separate variables, named something like N1, N2, N3, etc.
          But this doesn't fundamentally solve the problem, because when it comes to calculating, after twelve distinct reading instructions,
          it will look something like this:
        </p>
        <CodeBlock code={`Avg = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10 + N11 + N12) / 12`} />
        <p className="text-lg leading-relaxed mb-4">
          This becomes cumbersome. And if we're working with a program that handles hundreds or thousands of values,
          it becomes a serious problem.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If we also don't know in advance how many values we need to handle, we're facing an even bigger issue.
          That's why programming allows us to gather all of these variables into one single entity,
          where each value is referred to by a number.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          An array is a sequence of elements (a list) of variables. We can access an element in an array by its position:
          the index, or "key".
        </p>
        <p className="text-lg leading-relaxed mb-4">
          An array is used like a variable and can be passed as an argument to a function (including a method of a class) or returned as the result of a function.
        </p>
      </section >

      {/* Declaration and Creation */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Declaration and Creation</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          In JavaScript, an array can be declared in several ways:
        </p>
        <h3 className="text-xl font-semibold">Initializing an empty array (no data):</h3>
        <CodeBlock code={`var myArray = [];`} />

        <h3 className="text-xl font-semibold">Initializing an array with string data:</h3>
        <CodeBlock code={`var myArray = ["apple", "pear", "banana"]; // String data`} />

        <h3 className="text-xl font-semibold">Initializing an array with number data:</h3>
        <CodeBlock code={`var myArray = [123, 456, 789]; // Number data`} />

        <h3 className="text-xl font-semibold">Note:</h3>
        <p className="text-lg leading-relaxed mb-4">
          A JavaScript array can contain elements of different types (strings, numbers, etc.), unlike some other languages (e.g., C#).
          For example:
        </p>
        <CodeBlock code={`var myArray = ["apple", 123, "pear", 456];`} />

        <h3 className="text-xl font-semibold">Initializing an array with the Array object:</h3>
        <CodeBlock code={`var myArray = new Array(); // Empty array`} />
        <CodeBlock code={`var myArray = new Array(5); // Empty array with 5 elements`} />
        <CodeBlock code={`var myArray = new Array("apple", "pear", "banana"); // Array with data`} />
      </section >

      {/* Using Arrays */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Using Arrays</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          To access an element in an array, we call the array followed by square brackets [] containing the position of the desired element.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Note that in JavaScript (as in many other languages), the first element of an array is at index 0.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          So the second element is at position 1, the third at position 2, and so on. For example:
        </p>
        <CodeBlock code={`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
console.log(myArray[0]); // "apple"
console.log(myArray[3]); // "strawberry"`} />
      </section >

      {/* Filling an Array */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Filling an Array</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          When you declare an empty array, you can fill it by assigning a value to the desired position:
        </p>
        <CodeBlock code={`var myArray = [];
myArray[0] = "apple";
myArray[1] = "pear";`} />
      </section >

      {/* Common Array Functions */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Common Functions on Arrays</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          In programming languages, many native functions are available to handle arrays and their data, such as sorting, calculations, data extraction, and determining the length (the number of elements in an array), etc.
        </p>

        <h3 className="text-xl font-semibold">Knowing the number of elements in an array:</h3>
        <CodeBlock code={`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
var length = myArray.length;
console.log("The array contains " + length + " elements");`} />

        <h3 className="text-xl font-semibold">Looping through an array:</h3>
        <p className="text-lg leading-relaxed mb-4">
          The `for` and `forEach` loops can be used to iterate through an array, using the `length()` function to determine how many times the loop should run:
        </p>
        <CodeBlock code={`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
for (var i = 0; i < myArray.length; i++) {
  console.log("Fruit: " + myArray[i]);
}`} />

        <h3 className="text-xl font-semibold">Using `for...in` loop:</h3>
        <CodeBlock code={`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
for (var index in myArray) {
  console.log(myArray[index]);
}`} />
      </section >

      {/* Introduction */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Introduction</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Some of the array functions listed here have names that you may recognize from other programming languages
          (like PHP) where they serve the same purpose, but sometimes with different syntax or arguments.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The examples provided below are based on the following array:
        </p>
        <CodeBlock code={`var fruits = ["apple", "pear", "banana", "strawberry", "apricot"];`} />
      </section >

      {/* Array Functions */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Array Functions</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold">concat</h3>
        <p className="text-lg leading-relaxed mb-4">
          Combines two arrays into one.
          Example:
        </p>
        <CodeBlock code={`var fruits = ["apple", "pear", "banana", "strawberry", "apricot"];
var others = ["sugar", "flour", "eggs"];
var ingredients = fruits.concat(others);`} />

        <h3 className="text-xl font-semibold">indexOf</h3>
        <p className="text-lg leading-relaxed mb-4">
          Returns the first index where the element is found in the array (occurrence).
          Example:
        </p>
        <CodeBlock code={`fruits.indexOf('banana'); // returns 2`} />

        <h3 className="text-xl font-semibold">lastIndexOf</h3>
        <p className="text-lg leading-relaxed mb-4">
          Returns the last index where the element is found in the array.
          Example:
        </p>
        <CodeBlock code={`var fruits = ["apple", "pear", "banana", "strawberry", "banana", "apricot"];
fruits.lastIndexOf("banana"); // returns 4`} />

        <h3 className="text-xl font-semibold">pop</h3>
        <p className="text-lg leading-relaxed mb-4">
          Removes the last element of an array and returns it. This method modifies the array length.
          Example:
        </p>
        <CodeBlock code={`last = fruits.pop();
console.log(last); // returns "apricot" and removes it from the array`} />

        <h3 className="text-xl font-semibold">push</h3>
        <p className="text-lg leading-relaxed mb-4">
          Adds one or more elements to the end of an array and returns the new length of the array.
          Example:
        </p>
        <CodeBlock code={`var nb = fruits.push('mango', 'plum');`} />
        <p className="text-lg leading-relaxed mb-4">
          The new array will be:
        </p>
        <CodeBlock code={`fruits = ["apple", "pear", "banana", "strawberry", "apricot", 'mango', 'plum'];`} />
        <p className="text-lg leading-relaxed mb-4">
          The variable `nb` will now be 7.
        </p>

        <h3 className="text-xl font-semibold">shift</h3>
        <p className="text-lg leading-relaxed mb-4">
          Removes the first element from an array and returns it.
          Example:
        </p>
        <CodeBlock code={`fruits.shift(); // returns "apple"`} />

        <h3 className="text-xl font-semibold">sort</h3>
        <p className="text-lg leading-relaxed mb-4">
          Sorts the array in ascending order.
          Example:
        </p>
        <CodeBlock code={`fruits.sort(); // returns "apricot", "banana", "strawberry", "pear", "apple"`} />

        <h3 className="text-xl font-semibold">split</h3>
        <p className="text-lg leading-relaxed mb-4">
          Splits a string into an array using a specified delimiter.
          Example:
        </p>
        <CodeBlock code={`var date = '15/05/2018';
var myArray = date.split('/');`} />
        <p className="text-lg leading-relaxed mb-4">
          The `myArray` will contain the values "15", "05", and "2018".
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Note that these functions can be used without necessarily assigning their result to a variable.
        </p>
      </section >

      {/* Multidimensional Arrays */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Multidimensional Arrays</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          As mentioned, an array can contain strings, integers, or both, and it can also contain other arrays,
          which gives us "arrays of arrays". These are called multidimensional arrays.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Let's declare an empty array:
        </p>
        <CodeBlock code={`var tab1 = [];`} />
        <p className="text-lg leading-relaxed mb-4">
          Then, assign some elements to it:
        </p>
        <CodeBlock code={`tab1[0] = ["leek", "tomato", "carrot"];
tab1[1] = ["apple", "pear", "banana"];`} />
        <p className="text-lg leading-relaxed mb-4">
          Notice that the elements added are themselves arrays! Now, we can access an element like this:
        </p>
        <CodeBlock code={`console.log(tab1[1][2]); `} /> {/*Outputs "banana"*/}
        <p className="text-lg leading-relaxed mb-4">
          In this example, there are only two levels of arrays, but you can have 3, 4, 5 levels or more.
          However, managing deeply nested arrays can become very complex (imagine accessing data in the 5th nested array!).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You could also declare arrays like this:
        </p>
        <CodeBlock code={`var vegetables = ["leek", "tomato", "carrot"];
var fruits = ["apple", "pear", "banana"];
tab1[0] = vegetables;
tab1[1] = fruits;`} />
      </section >
      <h1 className="text-3xl font-bold text-center mb-10">Array Operations and Sorting</h1>

      {/* Operations on an unsorted array */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Operations on an Unsorted Array</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          On a data structure such as an array, you can perform various operations such as finding the minimum or maximum value, summing or multiplying the elements, or calculating the average of the array's elements.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Let’s consider an array of 35 numerical values and perform the following operations:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Calculate the sum of the elements in the array.</li>
          <li>Find the smallest element.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          For calculating the sum, we will add the content of the array's elements one by one from the first to the last.
        </p>
      </section >

      {/* Array Sorting */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Sorting an Array</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          An array is considered ordered if there is a relationship between the elements:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><b>Ascending order:</b> If the content of element i is less than or equal to the content of element i + 1.</li>
          <li><b>Descending order:</b> If the content of element i is greater than or equal to the content of element i + 1.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          Here are two sorting methods for an array of 30 numerical values, called `VALNUM`:
        </p>

        <h3 className="text-xl font-semibold">Ascending Sort by Successive Minimum Search</h3>
        <p className="text-lg leading-relaxed mb-4">
          The principle is as follows:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Search for the minimum value in the array and swap it with the first element.</li>
          <li>Repeat the process with the remaining elements, narrowing the search until all values are sorted.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          Visualization of the process on 4 values:
        </p>
        <CodeBlock code={`Initial Array:  8  1  7  5
After first pass: 1  8  7  5
After second pass: 1  5  7  8
After third pass: 1  5  7  8`} />

        <h3 className="text-xl font-semibold">Bubble Sort</h3>
        <p className="text-lg leading-relaxed mb-4">
          The principle is as follows:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Compare adjacent elements in the array. If they are out of order, swap them.</li>
          <li>Repeat the process until no swaps are made, signaling that the array is sorted.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          Visualization of the process on 5 values:
        </p>
        <CodeBlock code={`Initial Array: 5  18  14  4  26
First pass:      5  14  18  4  26
    5  14  4  18  26
Second pass:     5  4  14  18  26
Third pass:      4  5  14  18  26
Fourth pass:     4  5  14  18  26`} />
      </section >

      {/* Search for an element in a sorted array */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Searching for an Element in a Sorted Array</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A simple way to check if a word is in a dictionary is to examine each word one by one from the beginning to the end. This works, but it can be slow if the word is not found after many iterations.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          A more efficient approach is to take advantage of the fact that words in a dictionary are sorted alphabetically. Rather than checking each word sequentially, we compare the target word with the word in the middle of the dictionary:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>If the target word is earlier in the alphabet, continue the search in the first half of the dictionary.</li>
          <li>If the target word is later, search in the second half.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          By repeatedly halving the search space, we can find the target word much faster than sequential searching.
        </p>
      </section >

      {/* Exercise */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Exercise</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Write a program that creates an array with a size specified by the user. Then, the user should enter the values for the array. Finally, the program should display the contents of the array.
        </p>
      </section >
    </div >
  );
}
