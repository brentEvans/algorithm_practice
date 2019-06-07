

// find a cycle in an array
function isCycle(arr){
    let runner1 = arr[0],
        // initialize runner2 staggered ahead in order to later return true whenever arr[runner1] == arr[runner2]
        runner2 = arr[runner1];
    // making sure arr[runner2] is not undefined
    if(arr[runner2] == undefined) return false;
    while(true){
        // return false if value at runner 2 is out of bounds
        if(arr[runner2] >= arr.length || arr[runner2] < 0) return false;
        // return true if values at runner1 and runner2 are equal 
            // (because runner2 moves through twice as fast as runner1, this means runner2 has hit a loop)
        if(arr[runner1] === arr[runner2]) return true;
        // increment runner1
        runner1 = arr[runner1];
        // increment runner2
        runner2 = arr[runner2];
        // return false if value at runner 2 is out of bounds after 1 incrementation 
        if(arr[runner2] >= arr.length || arr[runner2] < 0) return false;
        // return true if values at runner1 and runner2 are equal (means runner2 has already looped through)
            // checking this twice optimizes in case there's an odd number of values (if runner2 skips over runner1)
        if(arr[runner1] === arr[runner2]) return true;
        // increment runner2 a second time
        runner2 = arr[runner2];
    }
}

let loopArr = [1,2,1,6];
let notLoopArr = [0, 1];

console.log(
    isCycle(notLoopArr)
);

