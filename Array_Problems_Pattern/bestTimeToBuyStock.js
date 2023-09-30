// [7 (0th day), 1 (1th day), 5 (2th day) , 3 (3th day), 6 (4th day), 4 (4th day)]
/**
 * MAX ELEMENT = Dont buy at all
 * Buy first and sell in the upcoming days 
 * Proposal : We sell the next day when we get the profit , rather than waiting : We should see as soon as with the profits 
 *  - Dont sell it if the next day price is less than the current day price 
 * === which means 
 *  -  sell as soon as you can get a profit and buy again 
 *  -  discard the previous buyingPrice if the current days price is lower than that and update the buying price 
 * 
 * 
 * ==== Options ==========
 * => Selling directly if buying on the first day : 1 -> 5 (4), 1 -> 3 (2), 1 -> 6 (5), 1 -> 4 (3)
 * 5 -> 6 (1)
 * 3 -> 6 (3), 3 -> 4 (1)
 * 6 -> no profit
 * 4 -> no profit 
 * 
 * II
 * => Multiple transactions starting at 1st day : 1 -> 5 (4), 3 -> 6(3) = total profit = 7
 */

 function maxProfit(arr){
    // we try to buy on the first day itself 
    let buyingPrice = arr[0] ,ans = 0;
    for(let i = 0; i < arr.length; i++){
        // if current day price is greater than the buyingprice : profit , add profit to the ans
        // update the buyingprice  after selling , because we 
        if(arr[i] >= buyingPrice){
            ans += (arr[i] - buyingPrice);
            buyingPrice = arr[i];
        }else {
            // current days price is less than the buyingprice 
            buyingPrice = arr[i]
        }

    }

    return ans; 
 }

 // TC : O( N )