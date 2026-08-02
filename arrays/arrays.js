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