package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan string, 5)

	for i := 1; i <= 6; i++ {
		go func(i int) {
			str := fmt.Sprintf("obj%d", i)
			fmt.Printf("adding %s to channel\n", str)
			c <- str
			fmt.Printf("done adding %s to channel\n", str)
		}(i)
	}

	for {
		time.Sleep(5 * time.Second)
		select {
		case str := <-c:
			fmt.Printf("received %s\n", str)
		default:
			fmt.Println("in default")

		}
	}

}
