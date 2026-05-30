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

//! Find the longest sub array length with sum k;

//TODO: This is onl for postivies with better solution which O(n) and O(1)
// function longestSubarrayPositivesWithSumK(arr, k){
//     let i = 0;
//     let maxLen = 0;
//     let sum = 0;
//     for(let j=0;j<arr.length;j++){
//         sum = sum + arr[j];
//         while(sum>k){
//             sum = sum - arr[i];
//             i++;
//         }
//         if(sum === k){
//             maxLen = j - i + 1 > maxLen ? j -i + 1 : maxLen;
//         }
//     }
//     console.log(maxLen)
// }
//TODO: This is prefix and thehashmap one which works for negatives as well but takes extra map for it
// function longestSubarrayWithSumK(a, k) {
//     let map = new Map();
//     let maxLen = 0;
//     let sum = 0;

//     for (let j = 0; j < a.length; j++){
//         sum = sum + a[j];
        
//         if (sum === k) {
//                 maxLen = j + 1;
//         }
//         if (map.has(sum - k)) {
//             let newL = j - map.get(sum - k);
//             if (newL > maxLen) {
//                 maxLen = newL;
//             }
//         }
//         if (!map.has(sum)) {
//             map.set(sum, j);
//         }

//     }
//     console.log(map , maxLen)
// }
// longestSubarrayPositivesWithSumK([1,1,1,1,1,0,0,0,0,3] , 3);

//! Find the 2 sum problem one with yes or no and the other with the indices of the numbers;

//TODO : This is the one with yes or no and it works for unsorted arrays as well
// function twoSumYesOrNo(arr, n){
//     arr.sort();
//     console.log(arr)
//     let l = 0;
//     let r = arr.length-1;
//     while(l<r){
//         let sum = arr[l] + arr[r]
//         if(sum === n){
//             console.log("Yes");
//             return;
//         }
//         else if(sum < n){
//             l++;
//         }
//         else{
//             r--;
//         }
//     }
//     console.log("No");
// }

//TODO: hashset Wala map
// function twoSumHashSet(arr, n){
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         let num2 = n - arr[i];
//         if(map.has(num2)){
//             console.log([i , map.get(num2)])
//             return;
//         }
//         else{
//             map.set(arr[i] , i);
//         }
//         console.log(map)
//     }
// }

// twoSumHashSet([8, 4, 5, 7 , 6] , 14)

//! Sort the array which has only 0's 1's and 2's in one pass and O(1) space
//TODO : Duch National Flag Algorithm
// function swapInArray(arr , i, j){
//     let temp;
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// function sort012(arr){
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;
//     while(mid<high){
//         if(arr[mid] === 0){
//             swapInArray(arr, low , mid);
//             low++;
//             mid++;
//         }
//         else if(arr[mid] === 1){
//             mid++;
//         }
//         else{
//             swapInArray(arr, mid , high);
//             high--;
//         }
//     }
//     console.log(arr)
// }

// sort012([0,1,0,2,0,2,0,1,1,1,0,0,2,2]);

//! Find the element that comes maximum and >n/2 times in an array
//TODO: Boyer Moore's Voting Algorithm
// function findLargestElement(arr){
//     let ele = arr[0];
//     let cnt = 1;
//     let realCnt = 0;
//     for(let i =1;i<arr.length;i++){
//         if(cnt === 0){
//             ele = arr[i];
//             cnt = 1;
//         }
//         else if(arr[i] === ele){
//             cnt++;
//         }
//         else{
//             cnt--;    
//         }
//     }

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===ele) realCnt++;
//     }
//     console.log(realCnt > arr.length/2 ? ele : "N/A")
// }
// findLargestElement([1,2,3,1,2,2,2])