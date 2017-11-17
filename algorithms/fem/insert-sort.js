function sort(numbers) {
    for (let i=1; i<numbers.length; i++) {
        for (let j = 0; j<i; j++) {
            console.log(numbers);
            if (numbers[i] < numbers[j]) {
                const spliced = numbers.splice(i, 1);
                numbers.splice(j, 0, spliced[0]);
            }
        }
    }
    return numbers;
}

console.log(sort([3,1,4,2]));
