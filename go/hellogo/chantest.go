package main

import (
	"fmt"
	"sync"
	"time"
)

func main1() {
	var syncGroup sync.WaitGroup
	syncGroup.Add(1)

	var timeout <-chan time.Time

	timeout = time.After(5 * time.Second)

	go func() {
		defer syncGroup.Done()
		fmt.Println("waiting for timeout")
		_ = <-timeout
	}()

	syncGroup.Wait()
	fmt.Println("it is done")
}
