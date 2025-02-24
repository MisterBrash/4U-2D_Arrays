# 2D Arrays (Lesson)

###### ICS4U - [Mr. Brash 🐿️](https://www.brash.ca/ics4uc/lessons/9)

[🔗 Jump to the practice (homework)](./.lesson/TASKS.md)


## The Lesson:
Two-dimensional (or more) arrays are extremely common in programming. They hold data that represents grids - a cartesian plane, a checkerboard, etc...

You can create a pre-filled 2D array by _declaring_ it:

<table><tr><td>

```JS
let my_2d_array = [ [1,2,3], [9, 8, 7], ["a", "b", "c"] ];
```
</td></tr></table>

You can also use the `new Array()` syntax:

<table><tr><td> 

```JS
let my_2d_array = new Array(4);   // array with 4 empty slots

for (let i = 0; i < my_2d_array.length; i++)
  my_2d_array[i] = new Array(10);   // each slot will be an empty array of length 10
```

</td></tr></table>


---

Here is an example function that creates and prints two different 2D Arrays:
<table><tr><td>

**Creating 2D Arrays:**  
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
```
example()

[ [ 'x', 'o', ' ' ], [ ' ', ' ', ' ' ], [ 'x', 'x', 'o' ] ] 

[
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ],
  [ '🦖', '🦖', '🦖', '🦖', '🦖' ]
]

```

</td></tr></table>


### Length
The length of a 2D array is the number of elements at the **base** level.

<table><tr><td>

```JS
let arr = [[3,4,5], [0,0,0], [1,2,3], [0,9,8], [1,1,1]];
console.log(arr.length);
> 5
```

</td></tr></table>

To determine the full length, you need to _traverse_ the arrays. See the task (below) where you will code this.


### Ragged Arrays
After a while, or perhaps even on purpose, you might end up with a situation where rows have differing numbers of columns.

<table><tr><td> 

```js
[[3,5,7,9], [4, 2], [5, 7, 8, 6], [6]]
// Looks like this:
3 5 7 9
4 2
5 7 8 6
6
```

</td></tr></table>

That is called a _ragged_ array. It's not a problem, but it can be difficult to manage. **Note:** ragged arrays are not possible in strongly typed languages such as C++ or Java.


