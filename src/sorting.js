let arr = [1, 2, 3, 4, 5];
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let a = i + 1; a < arr.length; a++) {
            if (arr[i] > arr[a]) {
                i = a;
            }
        }
        
    }
    return arr;
}