/*
Dont use spilt function to achieve this 
" Today is Thrusday" => "Thrusday is Today"

---------> 
1. To identify where word is starting = Space before a word is starting 
2. The space between the words can be more than one => but in the answer there should be onnly one space ( remove extra space and keep only one space)

3. String are IMMUTABLE , Cannot modify the given string , Create a new string 

======= > Approach < ============= 
1. Start from the last and find where the last word is starting => Which means where the space comes 
2. After reaching the space , add this word to the new string 
3. Therefore there will be two pointers to find the starting and the end of the word , move the second pointer until space 

==============> Time Complexity =================
1. We are traversing the word twice , therefore its 2n , therefore its O( n )

==============> Space Complexity =================
1. O( n )

==== > NOTE < =============
1. s += "abc" => Constant time operation
2. s = s + "abc" => Linear time operation 
*/

let ans = ""


// i tracks is the ending of the word
for(let i = s.length - 1; i >= 0; i--){
    // Adding space between the words -> just one word 
    if(ans.length > 0){
        ans += ' ';
    }
    
    if(s[i] != ' '){
        let wordEnding = i; 
        while(wordEnding >= 0 && s[wordEnding] != ' '){ //wordEnding will stop when it finds a space 
            j--;
        }

        //adding the word to a new variable , after finding the index of the word ending 
        let word = "";
        for(let k=wordEnding+1; k <= i;k++){
            word += s[k]
        }
        ans += word;
        i = j;
    }
}
return ans;
