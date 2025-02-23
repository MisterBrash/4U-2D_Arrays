# 2D Arrays - Challenge 🤔

###### ICS4U - Mr. Brash 🐿️

‼️ Only attempt this challenge _after_ completing the items in the [practice (homework)](./PRACTICE.md)

[🔗 Return to the README](../README.md)

## Challenge → Random Walk

**`random_walk(h, w, blank = '*')`** - Is a function that _returns_ a 2D array with the following parameters:

- `h` is height (rows), `w` is width (columns), and `blank` is the character of each element in the array at the beginning.
- `blank` defaults to `*` if you do not pass the parameter (for example: `random_walk(10, 15)` )


### The details:
 
- To start, fill a new 2D array with character `blank`
 
- Pick a random `column` [x] to start at (but the walk _always_ starts at row `0` [y])  
 
- Starting at this location, your function will "walk" left, right, or down and mark the choice with the appropriate arrow character (given as constants in the [library.js](library.js) file). 
 
- The path **_cannot_ go up** (rows can increase but not decrease). 
 
- To clarify - `row 0` is at the top. At each step the walk can move left **_or_** down **_or_** right randomly and mark that motion with the required arrow. It will then "move" itself to that location and repeat until it successfully gets to the last row. 
 
- It will stay within the dimensions of the 2D array (ie. cannot go left to column `-1`, for example). 
 
- **The function ends when it reaches the last row** 
 
- The function returns the matrix of this walk

<table><tr><td> 

**Example:**

```JS
let myPath = random_walk(5, 6);

// in this example, the random start column was index 3
print_2d(myPath);

*  *  *  →  ↓  *
*  *  *  ↓  ←  *
*  ↓  ←  ←  *  *
*  ↓  *  *  *  *
*  ↓  *  *  *  *
```


Those pretty arrows are just special characters:

```JS
/* Constants */
const LEFT_ARROW = "←";
const RIGHT_ARROW = "→";
const DOWN_ARROW = "↓";
```

</td></tr>
</table>

---

<br><br>
🐿️
