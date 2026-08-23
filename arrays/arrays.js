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
// function buyNdSellStock(arr){
//     let min = arr[0]
//     let profit = -Infinity;
//     for(let i = 1;i<arr.length;i++){
//         let num = arr[i];
//         if(num - min >0){
//             profit = Math.max(num - min , profit);
//         }
//         if(arr[i]<min){
//             min = arr[i]
//         }
//     }
//     return profit;
// }
// console.log(buyNdSellStock([7,1,2,3,6]))

// //! Rearrange the elements of the arrays starts from positives and alternates with negatives
// function rearrangeElements(arr){
//     let ans = [];
//     let even = 0;
//     let odd = 1;
//     for(const element of arr){
//         if(element > 0){
//             ans[even] = element
//             even<arr.length ? even+=2 : even+=1;
//         }
//         else{
//             ans[odd]= element;
//             odd<arr.length ? odd+=2 : odd+=1;
//         }
//     }

//     return ans
// }

// console.log(rearrangeElements([3,1,-2,2,3,-5,2,-4]));

// //TODO - WHen There are non equal number of elements
// function rearrangeElementsWithNonEquals(arr) {
//     let positives = [];
//     let negatives = [];

//     for (const num of arr) {
//         if (num >= 0) {
//             positives.push(num);
//         } else {
//             negatives.push(num);
//         }
//     }

//     let result = [];
//     let i = 0, j = 0;

//     while (i < positives.length && j < negatives.length) {
//         result.push(positives[i++]);
//         result.push(negatives[j++]);
//     }

//     while (i < positives.length) {
//         result.push(positives[i++]);
//     }

//     while (j < negatives.length) {
//         result.push(negatives[j++]);
//     }

//     return result;
// }

// console.log(rearrangeElements([1,2,3,-1,-2]));

// //! Find the next greater permutation of the given array
// const swapInArr = (arr , i , j) =>{
//     let temp= arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr;
// }
// const nextGreaterPermutaion = (arr) => {
//     let index= -1;
//     let maxIndex;
//     //Find the break point from the right where there will be a dip of the value to get the break point
//     let n = arr.length;
//     for(let i=n-2;i>=0;i--){
//         if(arr[i] < arr[i+1]){
//             index = i;
//             break
//         }
//     }

//     if(index === -1){
//         return arr.reverse();
//     }

//     // After finding the brak now find the greater number than that one from right so that we can get grater one but smaller than remaining others
//     for(let j=n-1;j>=index;j--){
//         if(arr[j] > arr[index]){
//             maxIndex = j;
//             break;
//         }
//     }

//     swapInArr(arr, index , maxIndex);

//     // So after swapping since we get the next array mostly in descending order just reviser it is fine
//     let left = index + 1;
//     let right = n - 1;

//     while (left < right) {
//         swapInArr(arr, left, right);
//         left++;
//         right--;
//     }

//     return arr;
// }
// console.log(nextGreaterPermutaion([2,1,5,4,3,0,0]))

//! Find the leaders in the array
// const leadersInArr = (arr, order) => {

//     let n = arr.length;
//     let leaders = [];

//     let currentMax = arr[n-1]
//     leaders.push(arr[n-1]);

//     for(let i=n-2;i>=0;i--){
//         if(arr[i] > currentMax){
//             leaders.push(arr[i]);
//             currentMax = arr[i];
//         }
//     }

//     if(order === 'asc'){
//         return leaders;
//     }
//     else{
//         return leaders.reverse();
//     }
// }
// console.log(leadersInArr([10,22,12,3,0,6] , 'desc'))

//! Longest Consecutive Sequence 
// const consecutiveLongestArr = (arr) =>{

//     let longestlen = 1;
//     const newSet = new Set(arr);

//     for(let num of newSet){
//         let curr = num;
//         if(newSet.has(num-1)){
//             continue;
//         }
//         else{
//             let temp = 0;
//             while(newSet.has(curr)){
//                 temp++;
//                 if(longestlen<temp){
//                     longestlen = temp;
//                 }
//                 curr++;
//             }
//         }
//     }

//     return longestlen

// }

// console.log(consecutiveLongestArr([102, 4, 100, 1, 101, 3, 2, 1, 1]))

//! Set matrix zeroes - If any element is 0 then make the entire row and column 0

// const setZerosBruteForce = (arr) => {

//     const markRow = (row) => {
//         for (let i = 0; i < colLength; i++) {
//             if (arr[row][i] !== 0) {
//                 arr[row][i] = -1;
//             }
//         }
//     }

//     const markCol = (col) => {
//         for (let i = 0; i < rowLenth; i++) {
//             if (arr[i][col] !== 0) {
//                 arr[i][col] = -1;
//             }
//         }
//     }
//     let rowLenth = arr.length;
//     let colLength = arr[0].length;
//     for (let i = 0; i < rowLenth; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (arr[i][j] === 0) {
//                 markRow(i);
//                 markCol(j)
//             }
//         }
//     }

//     for (let i = 0; i < rowLenth; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (arr[i][j] === -1) {
//                 arr[i][j] = 0;
//             }
//         }
//     }

//     console.log(arr)
// }

// const setZerosBetterSol = (arr) => {



//     let rowLenth = arr.length;
//     let colLength = arr[0].length;

//     let rowArr = new Array(rowLenth).fill(0);
//     let colArr = new Array(colLength).fill(0);


//     for (let i = 0; i < rowLenth; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (arr[i][j] === 0) {
//                 rowArr[i] = 1;
//                 colArr[j] = 1
//             }
//         }
//     }
//     // console.log(rowArr , colArr);

//     for (let i = 0; i < rowLenth; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (rowArr[i] === 1 || colArr[j] === 1) {
//                 arr[i][j] = 0;
//             }
//         }
//     }

//     console.log(arr)

// }

// const setZerosOptimal = (arr) => {
//     let col0 = 1;

//     let rowLenth = arr.length;
//     let colLength = arr[0].length;
//     for (let i = 0; i < rowLenth; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (arr[i][j] === 0) {
//                 if (j === 0) {
//                     col0 = 0;        
//                 } else {
//                     arr[0][j] = 0; 
//                 }
//                 if (i !== 0) {
//                     arr[i][0] = 0;  
//                 }
//             }
//         }
//     }

//     for (let i = 1; i < rowLenth; i++) {
//         for (let j = 1; j < colLength; j++) {
//             if (arr[0][j] === 0 || arr[i][0] === 0) {
//                 arr[i][j] = 0;
//             }
//         }
//     }

//     let zeroFirstRow = arr[0][0] === 0;

//     if (col0 === 0) {
//         for (let j = 0; j < rowLenth; j++) {
//             arr[j][0] = 0;
//         }
//     }

//     if (zeroFirstRow) {
//         for (let j = 0; j < colLength; j++) {
//             arr[0][j] = 0;
//         }
//     }



//     console.log(arr)
// }

// setZeros([[1,1,1,1], [1,0,1,1], [1,1,0,1], [1,0,0,1]])
// setZerosBetterSol([[1,1,1,1], [1,0,1,1], [1,1,0,1], [1,0,0,1]])
// setZerosOptimal([[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [0, 0, 0, 1]])

//! Rotate Matrix by 90 degree

// const swapInArr = (matrix , i , j) =>{
//     let temp = matrix[i][j];
//     matrix[i][j] = matrix[j][i];
//     matrix[j][i] = temp;
// }
// const rotateMatrix90 = (matrix) => {

//     for(let i=1;i<matrix.length;i++){
//         for(let j=0;j<i;j++){
//             swapInArr(matrix , i , j)
//         }
//     }
//     for(let k=0;k<matrix.length;k++){
//         matrix[k] = matrix[k].reverse();
//     }
//     console.log(matrix)
// }

// rotateMatrix90([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ])

//! Print the numbers in the sprial order

// const printSprialOrder = (matrix) =>{
//     let left = 0;
//     let right = matrix[0].length - 1;
//     let top = 0;
//     let bottom = matrix.length - 1;

//     let result = [];

//     while(left<=right && top<=bottom){
//         for(let i=left;i<=right;i++){
//             result.push(matrix[top][i]);
//         }
//         top++;

//         for(let i=top;i<=bottom;i++){
//             result.push(matrix[i][right]);
//         }
//         right--;

//         if(top<=bottom){
//             for(let i=right;i>=left;i--){
//                 result.push(matrix[bottom][i])
//             }
//             bottom--;
//         }
//         if(left<=right){
//             for(let i=bottom;i>=top;i--){
//                 result.push(matrix[i][left])
//             }
//             left++;
//         }
//     }
//     return result
// }

// console.log(printSprialOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]))

//! Count Subarray sum eqiuals k
// const countSubarraySumEqualsK = (arr, k) => {
//     let count = 0; // ✅ start at 0
//     let prefixSum = 0;
//     let map = new Map();
//     map.set(0, 1); // base case — empty subarray has sum 0

//     for (const element of arr) {
//         prefixSum += element;

//         // If prefixSum - k exists in map → subarrays found
//         if (map.has(prefixSum - k)) {
//             count += map.get(prefixSum - k); // ✅ add frequency not just 1
//         }

//         // Always update map — whether or not prefixSum-k was found
//         map.set(prefixSum, (map.get(prefixSum) || 0) + 1); // ✅ increment frequency
//     }

//     console.log(map, count);
// }
// countSubarraySumEqualsK([1,2,3,-3,1,1,1,4,2,3] , 3)

//! Pascal triangle - 3 Types of problems - 1. Print the triangle 2. Print the nth row 3. Print the kth element of nth row

// const nCrFunction = (n , r) => {
//     let res = 1;
//     for(let i=0;i<r;i++){
//         res = res * (n-i)
//         res = res / (i + 1);
//     }
//     return res;
// }


// const printTargetInTraingle = (row, col) => {
//     return nCrFunction(row, col)
// }

// const printnthRow = (n) =>{
//     let row = [1];
//     let ans = 1;
//     for(let i=1;i<=n;i++){
//         ans = ans * ((n-i+1)/i)
//         row.push(ans)
//     }
//     return row
// }

// const printPascalTriangle = (n) =>{
//     let row = [];
//     for(let i =0;i<n;i++){
//      row.push(printnthRow(i))
//     }
//     return row;
// }
// console.log(printTargetInTraingle(4, 2)) // Output: 6 Column and Row
// console.log(printnthRow(4)) // Nth Row
// console.log(printPascalTriangle(5)) // Complete Triangle

//! Find the array of numbes which occurs more than n/3 times in an array - Moore's Voting Algo

// const majorityElementNBy3 = (arr) =>{
//     console.log(arr)
//     let cnt1=0;
//     let cnt2 = 0;
//     let ele1
//     let ele2;
//     let res = []
//     for(let element of arr){
//         if(cnt1 === 0 && ele2 !== element){
//             cnt1 = 1;
//             ele1 = element
//         }
//         else if(cnt2 === 0 && ele1 !== element){
//             cnt2 = 1;
//             ele2 = element
//         }
//         else if(ele1 === element){
//             cnt1++;
//         }
//         else if(ele2 === element){
//             cnt2++
//         }
//         else{
//             cnt1--;
//             cnt2--;
//         }
//     }

//     console.log(ele1 , ele2)
    
//     cnt1=0;
//     cnt2 = 0;

//     for(let element of arr){
//         if(element === ele1){
//             cnt1++;
//         }
//         else if (element === ele2){
//             cnt2++;
//         }
//     }

//     let floorNum = Math.floor(arr.length/3)
//     if(cnt1>floorNum){
//         res.push(ele1);
//     }
//     if(cnt2 > floorNum){
//         res.push(ele2)
//     }

//     return res
// }
// console.log(majorityElementNBy3([2,2,1,2,1,1,3,1,2]))

//! Find the triplets whose sum is equal to 0 in an array - 3 Sum Problem

// const threeSumProblem = (arr) => {
//     arr.sort((a , b)=>a-b);
//     let res = []
//     for(let i=0;i<arr.length;i++){
//         if(i>0 && arr[i] === arr[i-1]) continue;
//         let j = i + 1;
//         let k = arr.length -1;
//         while(j<k){
//             let sum = arr[i] + arr[j] + arr[k];

//             if(sum>0){
//                 k--;
//             }
//             else if(sum <0){
//                 j++;
//             }
//             else{
//                 res.push([arr[i] , arr[j] , arr[k]])
//                 j++;
//                 k--;
//                 while(j<k && arr[j] === arr[j+1]) j++;
//                 while(j<k && arr[k] === arr[k-1]) k--;
//             }
//         }
//     }
//     return res
// }
// console.log(threeSumProblem([-2,1,0,2,2,1,0,-4,-1,-3]))

//! Find the quads whose sum is equal to the target - 4 Sum Problem

// const fourSumProblem = (arr, target) => {
//     let res = []
//     arr.sort((a,b)=>a-b);
//     for(let i=0;i<arr.length;i++){
//         if(i>0 && arr[i] === arr[i-1]) continue;
//         for(let j=i+1;j<arr.length;j++){
//             if(j!==i+1 && arr[j] === arr[j-1]) continue;
//             let k = j+1;
//             let l = arr.length -1;
//             while(k<l){
//                 let sum = arr[i]+arr[j]+arr[k]+arr[l];
//                 if(sum>target){
//                     l--;
//                 }
//                 else if(sum<target){
//                     k++;
//                 }
//                 else{
//                     res.push([arr[i], arr[j], arr[k] , arr[l]])
//                     l--;
//                     k++;
//                     while(k<l && arr[k] === arr[k-1]) k++;
//                     while(k<l && arr[l] === arr[l+1]) l--;
//                 }
//             }
//         }
//     }
//     return res
// }

// console.log(fourSumProblem([1,2,2,3,4,5] , 8))

//! Find the count of sub arrays with XOR equal to k

// const findCount = (arr, target) => {

//     const hashMap = new Map();
//     let prefixXor=0;
//     let count=0;
//     hashMap.set(0, 1)
//     for(let i=0;i<arr.length;i++){
//         prefixXor = prefixXor ^ arr[i];
//         let x = prefixXor ^ target;
//         if(hashMap.has(x)){
//             count += hashMap.get(x)
//         }
//         hashMap.set(prefixXor , (hashMap.get(prefixXor) || 0)+1)
//     }
//     console.log(hashMap , count)
// }

// console.log(findCount([4,2,2,6,4] , 6))