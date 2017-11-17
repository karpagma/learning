function sort(numbers) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i<numbers.length-1; i++) {
            if (numbers[i] > numbers[i+1]) {
                const temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return numbers;
}

let result = sort([2,4,3, 1, 6, 8, 7, 8]);
console.log(result);
