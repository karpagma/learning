function basicRecursion(max, current) {
    if (current > max) return;
    console.log(current);
    basicRecursion(max, current+1);
    console.log('-' + current);
}

basicRecursion(5, 1);
