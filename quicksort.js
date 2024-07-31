function quickSort(arr, ini, end) {
    let i = ini,
        j = end - 1,
        pivot = arr[Math.floor((ini + end) / 2)]

    while (i <= j) {
        while (arr[i] < pivot && i < end) {
            i += 1
        }
        while (arr[j] > pivot && j > ini) {
            j -= 1
        }
        if (i <= j) {
            let aux = arr[i]
            arr[i] = arr[j]
            arr[j] = aux
            i += 1
            j -= 1

            console.log(arr)
        }
    }

    if (ini < j) quickSort(arr, ini, j + 1)
    if (i < end) quickSort(arr, i, end)

}

const arr = [5, 3, 8, 10, 9, 1, 2, 4, 7, 6]
quickSort(arr, 0, arr.length)
console.log(arr)