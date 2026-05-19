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


