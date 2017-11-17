let two2Five = [2;3;4;5]

let evens list = 
    let isEven x = x%2 = 0
    List.filter isEven list

let result = evens two2Five
printfn "%A" result