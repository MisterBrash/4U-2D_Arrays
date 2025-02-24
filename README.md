# 2D Arrays (Lesson)

###### ICS4U - [Mr. Brash 🐿️](https://www.brash.ca/ics4uc/lessons/9)

#### Table of Contents
[🟣 Creating 2D Arrays](#creating-2d-arrays)  
[🟣 Length of 2D Arrays](#length)  
[🟣 "Ragged" Arrays](#ragged-arrays)  
[🟣 Heads Up!](#heads-up)  
[🔗 Practice (classwork)](./.lesson/PRACTICE.md)  

---

## Creating 2D Arrays

Two-dimensional (or more) arrays are extremely common in programming. They hold data that represents grids - a cartesian plane, a checkerboard, etc...

You can create a pre-filled 2D array by _declaring_ it:

```JS
let my_2d_array = [ [1,2,3], [9, 8, 7], ["a", "b", "c"] ];
```
You can also use the `new Array()` syntax:

```JS
let my_2d_array = new Array(4);   // array with 4 empty slots

for (let i = 0; i < my_2d_array.length; i++)
  my_2d_array[i] = new Array(10);   // each slot will be an empty array of length 10
```

Here is an example function that creates and prints two different 2D Arrays:
<table><tr><td>

```JS
// Create and print a couple 2D arrays
function example() {
  // Here's a small 2d array
  let tic_tac_toe = [['x', 'o', ' '],
                     [' ', ' ', ' '],
                     ['x', 'x', 'o']];

  console.log(tic_tac_toe, "\n");
  
  // Here's an array with 4 rows and 5 columns
  // It starts empty but we fill each one with 🦖
  let dino_array = new Array(4);
  for (let i = 0; i < dino_array.length; i++) {
    dino_array[i] = new Array(5);
    dino_array[i].fill('🦖')
  }

  console.log(dino_array);
}
```

</td>
<td valign="top">

**Output:**  
```BASH
~/js$ example()

[ [ 'x', 'o', ' ' ], [ ' ', ' ', ' ' ], [ 'x', 'x', 'o' ] ] 

[
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ]
]

```

</td></tr></table>


## Length

##### [🔝 Back to the top](#table-of-contents)  

The length of a 2D array is the number of elements at the **base** level.

```JS
let arr = [[3,4,5], [0,0,0], [1,2,3], [0,9,8], [1,1,1]];
console.log(arr.length);
> 5
```

To determine the full length, you need to _traverse_ the arrays. See the task (below) where you will code this.


## Ragged Arrays
After a while, or perhaps even on purpose, you might end up with a situation where rows have differing numbers of columns.

```js
[[3,5,7,9], [4, 2], [5, 7, 8, 6], [6]]
// Looks like this:
3 5 7 9
4 2
5 7 8 6
6
```

That is called a _ragged_ array. It's not a problem, but it can be difficult to manage. **Note:** ragged arrays are not possible in strongly typed languages such as C++ or Java.

## Heads up!

##### [🔝 Back to the top](#table-of-contents)  

Arrays in JS & Python are passed to functions or copied _by reference_.

> 🤔 What does this mean - "by reference"?

It means that when you try to make a copy or pass an array into a function, it makes a _link_ or _shortcut_ to the array.

```JS
let og_sheep = ['🐑', '🐑'];

let sheeps2 = og_sheep; // Copy the array

sheeps2.push('🐺');     // Add a wolf

// Print the arrays
console.log(sheeps2);    // -> [ '🐑', '🐑', '🐺' ]
console.log(og_sheep);   // -> [ '🐑', '🐑', '🐺' ]
```

😱 - both arrays have a wolf?! &nbsp;&nbsp;&nbsp;  ([source](https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/#why-can-t-i-use-to-copy-an-array))
  
### ⇨ &nbsp; [Go to the Practice (classwork)](./.lesson/PRACTICE.md)

<br>

🐿️