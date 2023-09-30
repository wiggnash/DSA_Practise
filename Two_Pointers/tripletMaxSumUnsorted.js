/*
What are Triplets in an array
0 <= i < j < k => these are the triplets index
arr[i] < arr[j] < arr[j] = these are the triplets
EXAMPLE : [3,7,4,2,5,7,5]
(3,7,4) => not a triplet
(3,7,7) => not a triplet 
(3,4,5) => triplet
(3,4,7) => triplet
(3,4,5) =>triplet
*/
// ===========  BRUTE FORCE APPROACH : TC : O( n ^ 3)========
function maxArr(arr){
    let n = arr.length;
    let ans = 0;

    for(let i = 0 ; i < n;i++){
        for(let j = i+1 ; j < n;j++){
            for(let k = j+1 ; k < n;k++){
                if(arr[i] < arr[j] && arr[j] < arr[k]){
                    ans = Math.max(ans,arr[i]+arr[j]+arr[k]);
                }
            }
        }
    }
}   


// =============== Two Pointer Approach ==================
/** 
 * Make the middle element fixed => need one element which is less for the left side , need one element which is more the the middle ele on right 
 * Interate over the numbers on the left and find less than the middle ele
 * Interate over the numbers on the right and find greater than the middle ele
 * TC for this solution is O(N ^ 2)
*/

function maxArray(arr){
    for(let j = 0; j < n-1;j++){
        // arr[i] is the middle element
        let first_ele = -1 , third_element = -1;
        for(let i = 0 ; i < j; i++){
            if(arr[i] < arr[j]){
                first_ele = Math.max(first_ele,arr[i])
            }
        }

        for(let k = j + 1; k < n; k++){
            if(arr[k] > arr[j]){
                third_element = Math.max(third_element,arr[k])
            }
        }

        if(first_ele !== -1 && third_element != -1){
            ans = Math.max(ans,first_ele + arr[j] + third_element);
        }
    }

    return ans;
}