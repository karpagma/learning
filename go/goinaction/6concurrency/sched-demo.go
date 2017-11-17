package main

import (
	"fmt"
	"runtime"
	"sync"
)

func main() {
	runtime.GOMAXPROCS(1)

	var waitGroup sync.WaitGroup
	waitGroup.Add(2)

	fmt.Println("Start Goroutines..")

	go func() {
		defer waitGroup.Done()

		for count := 0; count < 3; count++ {
			for char := 'a'; char < 'a'+26; char++ {
				fmt.Printf("%c ", char)
			}
		}
	}()

	go func() {
		defer waitGroup.Done()

		for count := 0; count < 3; count++ {
			for char := 'A'; char < 'A'+26; char++ {
				fmt.Printf("%c ", char)
			}
		}
	}()

	fmt.Println("Waiting to Finish")
	waitGroup.Wait()

	fmt.Println("\nTerminating Program")
}
