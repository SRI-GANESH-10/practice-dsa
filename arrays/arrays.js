//! Find the missing nimber in an array

// function missingNumberInArray(arr) {
//     let n = arr.length;
//     let totalSum = (n+1 )* (n + 2) / 2;
//     let arraySum = arr.reduce((acc, curr) => acc + curr, 0)
//     console.log("Missing Number: " + (totalSum - arraySum));
// }
// function missingNumberUsingXor(arr){ //? Why this is some what better is because it dosent over exceed the length of the arrays
//     let n = arr.length;
//     let xor1;
//     let xor2;
//     for(let i=0;i<n;i++){
//         xor2 = xor2 ^ arr[i];
//         xor1 = xor1 ^ (i+1)
//     }
//     xor1 = xor1 ^ n+1;
//     console.log("Missing Number: " + (xor1 ^ xor2))
// }
// missingNumberUsingXor([1,2,3,4,5,7,8,9])

//! Find consecutive ones in an array

// function consecutiveOnes(arr){
//     let cnt = 0;
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==1){
//             cnt++;
//             if(cnt > max){
//                 max = cnt;
//             }
//         }
//         else{
//             cnt = 0;
//         }
//     }
//     console.log("Number of consective one's are : " + max);
// }
// consecutiveOnes([1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0])

//! Find the number that appears once in an array where every other number appears twice

// function findSingleNumber(arr){
//     let xor = 0;
//     for(let i=0;i<arr.length;i++){
//         xor = xor ^ arr[i];
//     }
//     console.log("The number that appears once is: " + xor);
// }
// findSingleNumber([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8])


//! Find the longest sub array with given sum if only positives are there...
// function longestSubarray(arr, k) {
//     let left = 0;
//     let sum = 0;
//     let maxLen = 0;

//     for (let right = 0; right < arr.length; right++) {
//         sum += arr[right];

//         while (sum > k) {
//             sum -= arr[left];
//             left++;
//         }

//         if (sum === k) {
//             maxLen = Math.max(maxLen, right - left + 1);
//         }
//     }

//     return maxLen;
// }
// console.log(longestSubarray([1,2,3,1,1,1,1,4,2,3] , 3))

//TODO - For 0s and negatives
// function longestSubArr (arr, k){
//     let hashMap = new Map();
//     let sum = 0;
//     let maxLen = 0;
//     for(let i=0; i<arr.length;i++){
//         sum = sum + arr[i];

//         if (sum === k) {
//             maxLen = i + 1;
//         }
//         if(hashMap.has(sum - k)){
//             maxLen = Math.max(i - hashMap.get(sum - k), maxLen);
//         }
//         if(!hashMap.has(sum)){
//             hashMap.set(sum,i);
//         }
//     }
//     return maxLen;
// }
// console.log(longestSubArr([5,1,2], 3));

//! Find teh indices of the two numbers in an array with the given target
// function twoIndices(arr, k) {
//     let hashMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (hashMap.has(k - arr[i])) {
//             return [hashMap.get(k - arr[i]), i];
//         }

//         hashMap.set(arr[i], i);
//     }
// }
// console.log(twoIndices([1,2,3,4,5,6], 7));

//! Sorts the array containng 0,1,2 with optimal way - Dutch National Flag Algo
// function swapInArr(arr, i , j){
//     let temp;
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr;
// }
// function sortTheArr(arr){
//     let low = 0;
//     let mid = 0;
//     let high = arr.length-1;
//     while(mid<=high){
//         if(arr[mid] === 0){
//             swapInArr(arr , low , mid);
//             low++;
//             mid++;
//         }
//         else if(arr[mid] === 1){
//             mid++;
//         }
//         else if(arr[mid] === 2){
//             swapInArr(arr , mid , high);
//             high--;
//         }
//     }
//     return arr
// }

// console.log(sortTheArr([0,2,1,2,1,0,0,0,1,2,1,2]))

//! Find the number that is occuring more than n/2 times in an array - Moore's Voting Algo
// function majorityElement(nums) {
//     let candidate;
//     let count = 0;

//     // Step 1: Find the candidate
//     for (const num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }

//         if (num === candidate) {
//             count++;
//         } else {
//             count--;
//         }
//     }

//     // Step 2: Verify the candidate
//     let frequency = 0;

//     for (const num of nums) {
//         if (num === candidate) {
//             frequency++;
//         }
//     }

//     return frequency > nums.length / 2 ? candidate : -1;
// }

// console.log(majorityElement([7,7,7,5,5,2,1,2,5,5,5,5,5,5,5]));

//! Find the maximum sum of sub array and the array as well
// function maxSubArray(arr){
//     let maxSum = -Infinity;
//     let sum = 0;
//     let start, end, st;
//     for(let i=0;i<arr.length;i++){
//         if(sum === 0) st = i;
//          sum = sum + arr[i];
//         if(sum>maxSum){
//             maxSum = sum;
//             start = st ;
//             end = i
//         }
//         if(sum<0){
//             sum = 0
//         }
//     }

//     const res = arr.slice(start , end + 1)
//     return { maxSum , res}
// }   

// console.log(maxSubArray([-2,-3,4,-2,-1,1,5,-3]))

//! Buy and sell the stock 
function buyNdSellStock(arr){
    let min = arr[0]
    let profit = -Infinity;
    for(let i = 1;i<arr.length;i++){
        let num = arr[i];
        if(num - min >0){
            profit = Math.max(num - min , profit);
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return profit;
}
console.log(buyNdSellStock([7,1,2,3,6]))