// Learn more about F# at http://fsharp.org

open System
open Sort

[<EntryPoint>]
let main argv =
    let result = Sort.quicksort [4;3;1;2]
    printfn "%A" result
    0 // return an integer exit code
