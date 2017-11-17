module Sort

let rec quicksort list = 
    match list with
        | [] -> []
        | first::rest -> 
            let smallerElements = 
                rest 
                |> List.filter (fun e -> e < first)
                |> quicksort
            let largerElements = 
                rest 
                |> List.filter (fun e -> e >= first)
                |> quicksort
        
            List.concat [smallerElements; [first]; largerElements]