// Learn more about F# at http://fsharp.org
namespace HelloDncore

open System

module Program =
    [<EntryPoint>]
    let main argv =
        printfn "Hello World from F#!"
        
        argv
        |> Array.map int
        |> Array.map Lib.f
        |> Array.iter (printfn "%i")

        0 // return an integer exit code
