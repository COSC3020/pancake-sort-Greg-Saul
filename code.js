function flip(array, n) {
    let tmp = []
    if(n > array.length){
        n = array.length;
    }
    for(let i = 0; i < n; i++){
        tmp[i] = array[i];
    }
    tmp.reverse();
    for(let i = 0; i < n; i++){
        array[i] = tmp[i];
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for(let i = array.length; i > 0; i--){
        flip(array, getMax(array.slice(0, i)) + 1)
        // console.log(array.slice(0, i))
        // console.log(array)
        flip(array, i)
        // console.log(array)
    }
    return array;
}

function getMax(array){
    let max = array[0];
    let maxIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
            maxIndex = i
        }
    }
    return maxIndex;
}


// let arr = [1,2,3,4,5,6]
// let arr = [42, 17, 89, 23, 56, 31, 74, 5, 98, 12]
// let arr = [1,0]
// console.log(pancakeSort(arr))
// console.log(arr.slice(0,5))
