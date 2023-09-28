/*
====== Approach ----------
1. Storing the Count of every character in a string -> We use objects = where key is the character in the string and value if the no. of occurance

*/

let string = "hello";
// let countMap = new Map();
let countObj = {};
// for each character we are stroing its count 
for(let i = 0; i < string.length;i++){
    // ====> map implementation <====
    // let currentCount = countMap.get(string[i]);

    // if(!currentCount) countMap.set(string[i],1);
    // else countMap.set(string[i], currentCount + 1);
     
//================ =====> object implementation <==============================
    countObj[string[i]] = countObj[string[i]] ? countObj[string[i]] + 1 : 1 ;
}


// checking for characters occuring odd number of times
let odd = 0;

// "in" will interate over the keys in the object
// "of" will interate over the values in the obejct  

for(let ch in countObj){
    if(countObj[ch] % 2 == 1) odd++;

/*
    for(let ch of Object.values(countObj)){
        if( ch % 2 == 0 ) odd++
    }
*/
}

// if the number of occurance of odd character is more than once then we will return false 
if(odd <= 1) return true;
else return false


// ======== Space complexity ========
// worst case is that all the character exist , 26 + 26 = 52. 52 keys + 52  values => 104 be the max : Therefore it uses constant space O( 1 )
