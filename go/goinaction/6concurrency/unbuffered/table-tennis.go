package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var waitGroup sync.WaitGroup

func init() {
	rand.Seed(time.Now().UnixNano())
}

func main() {
	court := make(chan int)
	waitGroup.Add(2)

	go player("Nadal", court)
	go player("Djokovic", court)

	court <- 1
	waitGroup.Wait()
}

func player(name string, court chan int) {
	defer waitGroup.Done()

	for {
		ball, ok := <-court
		if !ok {
			fmt.Printf("Player %s won\n", name)
			return
		}
		n := rand.Intn(100)
		if n%13 == 0 {
			fmt.Printf("Player %s missed\n", name)
			//close(court)
			return
		}

		fmt.Printf("Player %s hit %d\n", name, ball)
		ball++

		court <- ball
	}

}
