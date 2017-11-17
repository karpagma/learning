let add x y = 
    match y with
        | 0 -> None
        | _ -> Some(x + y)

let a = add 10 5
let b = add 10 0
let exists (x : int option) = 
    match x with
        | Some(x) -> true
        | _ -> false

let s = Some 1
let y = exists s
printfn "value = %A" b