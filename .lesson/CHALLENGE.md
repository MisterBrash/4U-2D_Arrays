# 2D Arrays - Challenge 🤔

###### ICS4U - Mr. Brash 🐿️

‼️ Only attempt this challenge _after_ completing the items in the [practice (classwork)](./PRACTICE.md)

🔗 [Return to the README](../README.md)

## Challenge → Random Walk

### `random_walk(h, w, initial_fill = '*')`

**Parameters:**

- `h`, a positive whole number > 0 is the number of rows
- `w`, a positive whole number > 0 is the number columns
- `initial_fill` is a single character to fill the array at the start
    - `initial_fill` defaults to `*` if you do not pass it as a parameter (for example: `random_walk(10, 15)` )

**Return Value:**

A 2D array of the completed walk.

### The details:
 
- To start, fill a new 2D array `[h, w]` with character `initial_fill`
 
- Pick a random `column` to start at (but the walk _always_ starts at row `0`)  
 
- Starting at this location, your function will "walk" left, right, or down (no other choices) and mark the current location with the appropriate arrow character ([see below](#arrows)). 
 
- The path **_cannot_ go up** (rows can increase but not decrease).  
 
- To clarify:  
    - `row 0` is at the _top_.  
    - At each step the walk can move left **_or_** down **_or_** right _randomly_ and mark that motion with the required arrow in the current location before moving.  
    - It will then "move" itself to that location and repeat until it successfully gets to the last row. 
 
- It will stay within the dimensions of the 2D array (ie. cannot go left to column `-1`, for example). 
 
- **The function ends when it reaches the last row**  

- The final location is marked with a capital `X`
 
- The function returns the array representation of the "walk"

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
*  X  *  *  *  *
```

### Arrows

Those pretty arrows are just special characters:

```JS
/* Constants */
const LEFT_ARROW = '←';
const RIGHT_ARROW = '→';
const DOWN_ARROW = '↓';
```

</td></tr>
</table>

---

<br><br>
🐿️
