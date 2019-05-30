const linearSearch = (num, arr) => {
    return arr.includes(num) ? arr.indexOf(num) : false;
}

const iSum = (num) => {
    for(let i=num-1; i>0; i--){
        num += i;
    }
    return num;
}

const iFactorial = (num) => {
    for(let i=num-1; i>0; i--){
        num *= i;
    }
    return num;
}

const rFactorial = num => {
    if (num == 1) return 1;
    return rFactorial(num-1) * num;
}



// LOOK BACK AT THIS *******************************************************
const iFibonacci = num => {
    let fibs = [0, 1];
    for(let i=0; i<num; i++){
        fibs.push( fibs[0] + fibs[1] )
        fibs.shift()
    }
    // console.log(fibs)
    return fibs[0];
}
// console.log(iFibonacci(6))

const rFibonacci = num => {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return rFibonacci(num-2) + rFibonacci(num-1);
}







//Write a function rBS that behaves like the following:

var arr = [-90,-19,0,2,12,29,33,190,320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7

const rBS = (arr, val) => {
    let midpoint = arr[Math.floor(arr.length/2)];
    if (midpoint==val) return arr.indexOf(val);
    if (midpoint > val){
        return rBS(arr.slice(0, arr.indexOf(midpoint)), val);
    } 
    else if (midpoint < val){
        return rBS( (arr.slice(arr.indexOf(midpoint) + 1)), val);
    }
    return false;
}
console.log(
    rBS(arr, 190)
)
// PROBLEM: by slicing the array before passing it into the recursive function, we lose access to the indices of the original array
    // how to do the same logic while retaining access to the original array's indices?


