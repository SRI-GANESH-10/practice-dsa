//! -----Recurrsion - Reversing and array------
function swap(arr ,i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function revArr(arr , l  , r){

    if(l<r){
        swap(arr , l , r)
        return revArr(arr , l+1 , r-1);
    }
    else{
        return arr
    }
    
}

let arr1 = [1,2,3,4,5]
let l = 0;
let r = arr1.length-1;
console.log(revArr(arr1, l , r))

//*Todo - The time and space complexity are O(n) , precisly O(n/2) and only n/2 times called and 1 functions for every call

