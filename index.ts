export function mergeAndSortArray(a: number[], b: number[]): number[] {
    // Merge two arrays
    const mergedArray = [...a, ...b]
    // Sort the merged array
    const sortedArray = bubbleSort(mergedArray)

    return sortedArray
    
}

function bubbleSort(arr: number[]): number[] {
    let i, j, temp;
    let swapped;
    let n = arr.length;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
    return arr
}

// console.log(mergeAndSortArray([1, 2, 3, 5, 7, 9,16, 19], [2, 5, 6, 10, 18, 20, 28]))