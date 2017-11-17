package main

import (
	"fmt"
	"runtime"
	"sync"
)

var counter int
var waitGroup sync.WaitGroup
var mutex sync.Mutex

func main() {
	waitGroup.Add(2)

	go incCounter(1)
	go incCounter(2)

	waitGroup.Wait()
	fmt.Println("Final Counter:", counter)
}

func incCounter(id int) {
	defer waitGroup.Done()

	for count := 0; count < 2; count++ {
		mutex.Lock()
		{
			value := counter

			runtime.Gosched()

			value++

			counter = value
		}
		mutex.Unlock()
	}
}
