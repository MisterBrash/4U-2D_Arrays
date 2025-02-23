# 2D Arrays - Practice 💻 

###### ICS4U - Mr. Brash 🐿️

🔗 [Back to the lesson (README)](../README.md)

This task should keep you busy! Check with classmates and then with your teacher to see if you have it working correctly.

Practice creating and working with 2d arrays in the following ways:

- Create the function `new_2d(rows, cols, filler)`.  This function creates a new 2d array of height `rows` and width `cols`, all filled with `filler`. <br>**For Example:**
  ```JS
  let zeros = new_2d(4, 3, 0);
  console.log(zeros);
  > [ [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0] ]
  ```
  <br>
  
- Create the function `random_2d(rows, cols, min, max)`. This function creates a 2d array of height `rows` and width `cols`, where each element is a random number from `min` to `max`. Don't forget, you can use `lib.randInt()` from the [library.js](library.js) file.
<br>

- Create the function `print_2d(arr)` that assumes the input is a 2D array and prints to the console with **each column (element) separated by a tab** (**`\t`**) and **each row on a new line**. Note - it might not be a _square_ array (cols != rows).<br> **Example:**
  ```JS
  print_2d([[1,0,1],[0,1],[1,3,1],[0,0,0]]);
  1   0   1
  0   1  
  1   3   1
  0   0   0
  ```
<br>

- Create the function `length_2d(arr)` that iterates through the structure of the given 2d array, `arr`, and _returns_ the total number of elements. _Assume_ the array is 2-dimensional.<br>**For Example:**
  ```JS
  length_2d([[3,5,7,9], [4, 2], [5, 7, 8, 6], [6]]);
  > 11
  ```
<br>

- Create the function `hide_waldo(rows, cols)` that creates a new 2d array `cols` wide and `rows` tall. It will randomly hide the string "waldo" amongst a bunch of random integers or emoticons or whatever you choose. Your function will _return_ the 2d array. 
<br>

- Create the function `wheres_waldo(arr)`. This function looks for the string "waldo" inside the given 2d array and returns his location (or `undefined` if he's never found). The return value is a 1d array in the form `[x, y]` where `[x, y] = [column, row]`.<br>**For Example:**
  ```JS
  let puzzle = [[0,1,"hi",-1],[9,4,"waldo",3], [0,0,0,0,0,0]];
  
  console.log(wheres_waldo(puzzle));
  [2, 1]    // He's in the third position of the second array
  ```

If done correctly, you should be able to run `wheres_waldo(hide_waldo(8, 8))` and your code should hide and then find him!

Don't forget to test your functions - you'll need some `console.log()` to see the returns.

[Looking for a challenge](CHALLENGE.md)?

<br><br><br>
