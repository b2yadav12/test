function findSecondLargest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("No elements found");
        return;
    }

    if(arr.length === 1) {
        console.warn("The array has only one element, so returning the first element.");
        return arr[0];
    }

    if(arr.length === 2) {
        if(arr[0] < arr[1]) {
            return arr[1];
        }
        return arr[0];
    }

    let largest = -Infinity, secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
console.log(`Second largest number is ${findSecondLargest(arr)}`);