export default function ArraysPage() {
  return (
    <div className="px-6 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-10">JS 10: Arrays</h1>

      {/* Objectives */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Objectives</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Discover and understand the concept of arrays.</li>
          <li>Create and manipulate arrays and the data they contain.</li>
          <li>Learn common array manipulation functions.</li>
        </ul>
      </section>

      {/* Definition */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Definition</h2>
        <p className="text-lg leading-relaxed">
          Imagine that in a program, we need to store 12 values simultaneously, for example, grades to calculate an average.
          Obviously, the only solution we have right now is to declare twelve separate variables, named something like N1, N2, N3, etc.
          But this doesn't fundamentally solve the problem, because when it comes to calculating, after twelve distinct reading instructions,
          it will look something like this:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`Moy = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10 + N11 + N12) / 12`}
          </pre>
        </div>
        <p className="text-lg leading-relaxed">
          This becomes cumbersome. And if we're working with a program that handles hundreds or thousands of values,
          it becomes a serious problem.
        </p>
        <p className="text-lg leading-relaxed">
          If we also don't know in advance how many values we need to handle, we're facing an even bigger issue.
          That's why programming allows us to gather all of these variables into one single entity,
          where each value is referred to by a number.
        </p>
        <p className="text-lg leading-relaxed">
          An array is a sequence of elements (a list) of variables. We can access an element in an array by its position:
          the index, or "key".
        </p>
        <p className="text-lg leading-relaxed">
          An array is used like a variable and can be passed as an argument to a function (including a method of a class) or returned as the result of a function.
        </p>
      </section>

      {/* Declaration and Creation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Declaration and Creation</h2>
        <p className="text-lg leading-relaxed">
          In JavaScript, an array can be declared in several ways:
        </p>
        <h3 className="text-2xl font-semibold">Initializing an empty array (no data):</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = [];`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Initializing an array with string data:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", "pear", "banana"]; // String data`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Initializing an array with number data:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = [123, 456, 789]; // Number data`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Note:</h3>
        <p className="text-lg leading-relaxed">
          A JavaScript array can contain elements of different types (strings, numbers, etc.), unlike some other languages (e.g., C#).
          For example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", 123, "pear", 456];`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Initializing an array with the Array object:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = new Array(); // Empty array`}
          </pre>
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = new Array(5); // Empty array with 5 elements`}
          </pre>
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = new Array("apple", "pear", "banana"); // Array with data`}
          </pre>
        </div>
      </section>

      {/* Using Arrays */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Using Arrays</h2>
        <p className="text-lg leading-relaxed">
          To access an element in an array, we call the array followed by square brackets [] containing the position of the desired element.
        </p>
        <p className="text-lg leading-relaxed">
          Note that in JavaScript (as in many other languages), the first element of an array is at index 0.
        </p>
        <p className="text-lg leading-relaxed">
          So the second element is at position 1, the third at position 2, and so on. For example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
console.log(myArray[0]); // "apple"
console.log(myArray[3]); // "strawberry"`}
          </pre>
        </div>
      </section>

      {/* Filling an Array */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Filling an Array</h2>
        <p className="text-lg leading-relaxed">
          When you declare an empty array, you can fill it by assigning a value to the desired position:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = [];
myArray[0] = "apple";
myArray[1] = "pear";`}
          </pre>
        </div>
      </section>

      {/* Common Array Functions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Common Functions on Arrays</h2>
        <p className="text-lg leading-relaxed">
          In programming languages, many native functions are available to handle arrays and their data, such as sorting, calculations, data extraction, and determining the length (the number of elements in an array), etc.
        </p>

        <h3 className="text-2xl font-semibold">Knowing the number of elements in an array:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
var length = myArray.length;
console.log("The array contains " + length + " elements");`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Looping through an array:</h3>
        <p className="text-lg leading-relaxed">
          The `for` and `forEach` loops can be used to iterate through an array, using the `length()` function to determine how many times the loop should run:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
for (var i = 0; i < myArray.length; i++) {
  console.log("Fruit: " + myArray[i]);
}`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Using `for...in` loop:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var myArray = ["apple", "pear", "banana", "strawberry", "apricot"];
for (var index in myArray) {
  console.log(myArray[index]);
}`}
          </pre>
        </div>
      </section>

      {/* Introduction */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Introduction</h2>
        <p className="text-lg leading-relaxed">
          Some of the array functions listed here have names that you may recognize from other programming languages
          (like PHP) where they serve the same purpose, but sometimes with different syntax or arguments.
        </p>
        <p className="text-lg leading-relaxed">
          The examples provided below are based on the following array:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var fruits = ["apple", "pear", "banana", "strawberry", "apricot"];`}
          </pre>
        </div>
      </section>

      {/* Array Functions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Array Functions</h2>

        <h3 className="text-2xl font-semibold">concat</h3>
        <p className="text-lg leading-relaxed">
          Combines two arrays into one.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var fruits = ["apple", "pear", "banana", "strawberry", "apricot"];
var others = ["sugar", "flour", "eggs"];
var ingredients = fruits.concat(others);`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">indexOf</h3>
        <p className="text-lg leading-relaxed">
          Returns the first index where the element is found in the array (occurrence).
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`fruits.indexOf('banana'); // returns 2`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">lastIndexOf</h3>
        <p className="text-lg leading-relaxed">
          Returns the last index where the element is found in the array.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var fruits = ["apple", "pear", "banana", "strawberry", "banana", "apricot"];
fruits.lastIndexOf("banana"); // returns 4`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">pop</h3>
        <p className="text-lg leading-relaxed">
          Removes the last element of an array and returns it. This method modifies the array length.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`last = fruits.pop();
console.log(last); // returns "apricot" and removes it from the array`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">push</h3>
        <p className="text-lg leading-relaxed">
          Adds one or more elements to the end of an array and returns the new length of the array.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var nb = fruits.push('mango', 'plum');`}
          </pre>
          <p className="text-lg leading-relaxed">
            The new array will be:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <pre className="text-sm bg-black text-white p-4 rounded">
              {`fruits = ["apple", "pear", "banana", "strawberry", "apricot", 'mango', 'plum'];`}
            </pre>
          </div>
          <p className="text-lg leading-relaxed">
            The variable `nb` will now be 7.
          </p>
        </div>

        <h3 className="text-2xl font-semibold">shift</h3>
        <p className="text-lg leading-relaxed">
          Removes the first element from an array and returns it.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`fruits.shift(); // returns "apple"`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">sort</h3>
        <p className="text-lg leading-relaxed">
          Sorts the array in ascending order.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`fruits.sort(); // returns "apricot", "banana", "strawberry", "pear", "apple"`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">split</h3>
        <p className="text-lg leading-relaxed">
          Splits a string into an array using a specified delimiter.
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var date = '15/05/2018';
var myArray = date.split('/');`}
          </pre>
          <p className="text-lg leading-relaxed">
            The `myArray` will contain the values "15", "05", and "2018".
          </p>
        </div>

        <p className="text-lg leading-relaxed">
          Note that these functions can be used without necessarily assigning their result to a variable.
        </p>
      </section>

      {/* Multidimensional Arrays */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Multidimensional Arrays</h2>
        <p className="text-lg leading-relaxed">
          As mentioned, an array can contain strings, integers, or both, and it can also contain other arrays,
          which gives us "arrays of arrays". These are called multidimensional arrays.
        </p>
        <p className="text-lg leading-relaxed">
          Let's declare an empty array:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var tab1 = [];`}
          </pre>
        </div>
        <p className="text-lg leading-relaxed">
          Then, assign some elements to it:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`tab1[0] = ["leek", "tomato", "carrot"];
tab1[1] = ["apple", "pear", "banana"];`}
          </pre>
        </div>
        <p className="text-lg leading-relaxed">
          Notice that the elements added are themselves arrays! Now, we can access an element like this:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`console.log(tab1[1][2]); `} {/*Outputs "banana"*/}
          </pre>
        </div>
        <p className="text-lg leading-relaxed">
          In this example, there are only two levels of arrays, but you can have 3, 4, 5 levels or more.
          However, managing deeply nested arrays can become very complex (imagine accessing data in the 5th nested array!).
        </p>
        <p className="text-lg leading-relaxed">
          You could also declare arrays like this:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`var vegetables = ["leek", "tomato", "carrot"];
var fruits = ["apple", "pear", "banana"];
tab1[0] = vegetables;
tab1[1] = fruits;`}
          </pre>
        </div>
      </section>
      <h1 className="text-4xl font-bold text-center mb-10">Array Operations and Sorting</h1>

      {/* Operations on an unsorted array */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Operations on an Unsorted Array</h2>
        <p className="text-lg leading-relaxed">
          On a data structure such as an array, you can perform various operations such as finding the minimum or maximum value, summing or multiplying the elements, or calculating the average of the array's elements.
        </p>
        <p className="text-lg leading-relaxed">
          Let’s consider an array of 35 numerical values and perform the following operations:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Calculate the sum of the elements in the array.</li>
          <li>Find the smallest element.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          For calculating the sum, we will add the content of the array's elements one by one from the first to the last.
        </p>
      </section>

      {/* Array Sorting */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Sorting an Array</h2>
        <p className="text-lg leading-relaxed">
          An array is considered ordered if there is a relationship between the elements:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><b>Ascending order:</b> If the content of element i is less than or equal to the content of element i + 1.</li>
          <li><b>Descending order:</b> If the content of element i is greater than or equal to the content of element i + 1.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Here are two sorting methods for an array of 30 numerical values, called `VALNUM`:
        </p>

        <h3 className="text-2xl font-semibold">Ascending Sort by Successive Minimum Search</h3>
        <p className="text-lg leading-relaxed">
          The principle is as follows:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Search for the minimum value in the array and swap it with the first element.</li>
          <li>Repeat the process with the remaining elements, narrowing the search until all values are sorted.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Visualization of the process on 4 values:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`Initial Array:  8  1  7  5
After first pass: 1  8  7  5
After second pass: 1  5  7  8
After third pass: 1  5  7  8`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold">Bubble Sort</h3>
        <p className="text-lg leading-relaxed">
          The principle is as follows:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Compare adjacent elements in the array. If they are out of order, swap them.</li>
          <li>Repeat the process until no swaps are made, signaling that the array is sorted.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Visualization of the process on 5 values:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm bg-black text-white p-4 rounded">
            {`Initial Array: 5  18  14  4  26
First pass:      5  14  18  4  26
    5  14  4  18  26
Second pass:     5  4  14  18  26
Third pass:      4  5  14  18  26
Fourth pass:     4  5  14  18  26`}
          </pre>
        </div>
      </section>

      {/* Search for an element in a sorted array */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Searching for an Element in a Sorted Array</h2>
        <p className="text-lg leading-relaxed">
          A simple way to check if a word is in a dictionary is to examine each word one by one from the beginning to the end. This works, but it can be slow if the word is not found after many iterations.
        </p>
        <p className="text-lg leading-relaxed">
          A more efficient approach is to take advantage of the fact that words in a dictionary are sorted alphabetically. Rather than checking each word sequentially, we compare the target word with the word in the middle of the dictionary:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>If the target word is earlier in the alphabet, continue the search in the first half of the dictionary.</li>
          <li>If the target word is later, search in the second half.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          By repeatedly halving the search space, we can find the target word much faster than sequential searching.
        </p>
      </section>

      {/* Exercise */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Exercise</h2>
        <p className="text-lg leading-relaxed">
          Write a program that creates an array with a size specified by the user. Then, the user should enter the values for the array. Finally, the program should display the contents of the array.
        </p>
      </section>
    </div>
  );
}
