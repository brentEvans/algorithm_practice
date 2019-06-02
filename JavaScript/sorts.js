let array = [20, 19, 18, 17, 16, 15, 14, 13, 99, 0, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const swap = (arr, i, k) => {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

const bubbleSort = arr => {
    for(let i=0; i<arr.length-1; i++){
        for(let k=1; k<arr.length; k++){
            if(arr[k-1] > arr[k]) swap(arr, k-1, k);
        }
    }
    return arr;
}
// console.log(bubbleSort(array))

const selectionSort = arr => {
    for(let i=0; i<arr.length; i++){
        let minIdx = i;
        for(let k=i; k<arr.length; k++){
            if (arr[k] < arr[minIdx]) {
                minIdx = k;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
}
// console.log(selectionSort(array));

//divide arr into 2 portions
    //1. unsorted
    //2. sorted
//at each step, move a value from the unsorted portion into the sorted

//instead of constantly swapping values, we shift greater values to the right in order to empty the particular index where the current value belongs

const insertionSort = arr => {
    for(let i=1; i<arr.length; i++){
        let value = arr[i];
        for(var k=i-1; k>=0 && arr[k]>value; k--){
            arr[k+1] = arr[k];
        }
        arr[k+1] = value;
    }
    return arr;
}
console.log(insertionSort(array))

// continually split the list of cups into halves, until we have a bunch of lists with just 1 val in them (if length is odd, 1 list will have 2 vals)

const mergeSort = arr => {
    
}






