
// Array: Reverse
const reverseArray = (arr) => {
    for(let i=0; i<arr.length/2; i++){
        let temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// console.log(reverseArray([2,3,4,5,6,7,8]));



// Array: Rotate
const rotateArray = (arr, offset) => {
    for(let i=arr.length; i>=0; i--){
        arr[i + offset] = arr[i];
        console.log(arr[i+offset]);
    }
    for(let i=arr.length; i>=offset; i--){
        arr[0 + (i - offset)] = arr[i];
        arr.pop();
    }
    return arr;
}
// console.log(rotateArray([2,3,4,5,6,7,8], 2));




let res = '';
res += 'A';
console.log(res);