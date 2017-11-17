let simplePatternMatch x = 
    match x with
        | "a" -> printfn "x is a"
        | _ -> printfn "x is something"

simplePatternMatch "b"

let optionPatternMatch x =
    match x with
        | Some i -> printfn "x is an int=%d" i
        | None -> printfn "input is missing"

let validValue = Some(2)
optionPatternMatch validValue