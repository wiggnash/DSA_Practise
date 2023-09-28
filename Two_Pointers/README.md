# Two Pointer Pattern or Approach

**Note** : Pointer => Iterator for keeping track of indices

- _One Pointer_ : Simple For loop
- _Two Pointer_ : Having two indices pointing to different part of array or string initally and adjust both of them in the loop
  - Binary Search

## When do we use two pointers ?

1. Reduces time complexity
2. When nested for loops are used to solve certain problems , Because nested for loops will have TC : O( n ^ 2)
3. Use Two pointer : TC will be O( n )

### Hints to note

1. Array is sorted
2. BruteFoce approach gives us O( n ^ 2) or O( n ^ 3)

## What to do for two pointer approach

_Step 1_ : Init 2 variables pointing at start and end of the array (if one array is involved) => Start = 0 , End = n - 1
_Step 2_ : Have ( While or For loop )Evaluate the rules based on the prob for the elements present at two pointers and adjust the pointers accordingly => Rules can be finding the target , lesser than target or greater than target
_Step 3_ : **Start** pointer will always be increased , **End** pointer will always be decreased , because it is sorted array
