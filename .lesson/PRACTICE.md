# 2D Arrays - Practice 💻 

###### ICS4U - Mr. Brash 🐿️

🔗 [Back to the lesson (README)](../README.md)  
⇨  &nbsp; [A Challenge](./CHALLENGE.md)  (only when you finish the practice)

This is practice with 2D arrays. Check with classmates and then your teacher to see if you have it working correctly.

Write your code in [`script.js`](../script.js). Complete in the order presented:

- Create the function `new_2d(rows, cols, filler)`.  This function creates a new 2d array of height `rows` and width `cols`, all filled with `filler`.  
**For Example:**
  ```JS
  let zeros = new_2d(4, 3, 0);
  console.log(zeros);
  > [ [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0] ]
  ```
  
<br> 

- Create the function `random_2d(rows, cols, min, max)`. This function creates a 2d array of height `rows` and width `cols`, where each element is a random number from `min` to `max`. `randInt()` is already in the [script file](../script.js).  

<br>

- Create the function `length_2d(arr)` that assumes the input is a 2D array and and _returns_ the total number of elements.  
**For Example:**
  ```JS
  length_2d([[3,5,7,9], [4, 2], [5, 7, 8, 6], [6]]);
  > 11
  ```
<br>

- Create the function `print_2d(arr)` that assumes the input is a 2D array and prints to the console with **each column (element) separated by a tab** (**`\t`**) and **each row on a new line**. Note - it might not be a _square_ array (cols != rows).  
**For Example:**
  ```JS
  print_2d([[1,0,1],[0,1],[1,3,1],[0,0,0]]);
  1   0   1
  0   1  
  1   3   1
  0   0   0
  ```  
  **The above function (`print_2d()`) is necessary for a future assessment so make sure it works as expected!**  

<br>

- Create the function `hide_waldo(rows, cols)` that creates a new 2d array `cols` wide and `rows` tall. It will randomly hide the string "waldo" amongst a bunch of random integers or emoticons or whatever you choose. Your function will _return_ the 2d array. 

<br>

- Create the function `wheres_waldo(arr)`. This function looks for the string "waldo" inside the given 2d array and returns his location as a 2-element array `[row, col]` (or `[]` if he's never found).  
**For Example:**
  ```JS
  let puzzle = [[0,1,"hi",-1],[9,4,3, "waldo", "not waldo"], [0,0,0,0,0,0]];
  
  console.log(wheres_waldo(puzzle));
  [1, 3]    // He's in the fourth position of the second array
  ```

If done correctly, you should be able to run `wheres_waldo(hide_waldo(10, 8))` and your code should hide and then find him!

Don't forget to test your functions - you'll need some `console.log()` to see the returns.

🔝  [Back to the top](#2d-arrays---practice-)  
🔗 [Back to the lesson (README)](../README.md)  

### ⇨ [Looking for a challenge](./CHALLENGE.md)?

<br>

🐿️