let square x = x * x

let sumOfSquares n = 
    List.sumBy square [1..n]

sumOfSquares 100