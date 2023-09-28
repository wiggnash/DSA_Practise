# Sliding Window Pattern

_Sub Array_ : Contineous portions of the array or the Consecutive elements => [1 , 3, 4 ,5, 6, 7, 9] Sub array is [1] , [1,3] , [1,3,5] , [6,7]
_Sub Set_ : No order or no contineuos portion => [1 , 3, 4 ,5, 6, 7, 9] Sub set is [1] , [1,5] , [1,3,5] , [1,9,7]

**When USED** : Used when we need to find the contineous portion of the array satisfying certain ceritiria - EX : Find a subarray of size K in a array of size N , Where the sum of the subarray is max
[2,5,4,8,1] k = 3 ( size of the subarray ), n = 5 ( size of the array ) =>

## Hints to be noted

1. When the questions talks about sub array or sub string ( contineous portion of array or string )

## Steps

1. Find the sum of the first sub array ( 0 - k -1 ( k is the size of the sub array ))
2. Increment the ending index and the starting index by 1 to find the next sub arrays
