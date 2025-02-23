# 2.2 - 2D Arrays (Lesson)

###### ICS4U - [Mr. Brash](https://www.brash.ca/ics4uc/2)

[Jump to the tasks](TASKS.md)

## The Lesson:
Two-dimensional (or more) arrays are extremely common in programming. They hold data that represents grids - a cartesian plane, a checkerboard, etc...


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
<td>

Output:
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
```JS
let arr = [[3,4,5], [0,0,0], [1,2,3], [0,9,8], [1,1,1]];
console.log(arr.length);
> 5
```
To determine the full length, you need to _traverse_ the arrays. See the task (below) where you will code this.


### Ragged Arrays
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


