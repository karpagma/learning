package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

const (
	nrOfWorkers = 4
	nrOfTasks   = 10
)

var waitGroup sync.WaitGroup

func init() {
	rand.Seed(time.Now().Unix())
}

func main() {
	tasks := make(chan string, nrOfTasks)
	waitGroup.Add(nrOfWorkers)

	for n := 0; n <= nrOfTasks; n++ {
		go worker(tasks, n)
	}

	for task := 1; task <= nrOfTasks; task++ {
		tasks <- fmt.Sprintf("Task: %d", task)
		fmt.Printf("Added %d task\n", task)
	}

	close(tasks)
	waitGroup.Wait()
}

func worker(tasks chan string, worker int) {
	defer waitGroup.Done()

	for {
		task, ok := <-tasks
		if !ok {
			fmt.Printf("Worker: %d : Shutting down\n", worker)
			return
		}

		fmt.Printf("Worker: %d : Started %s\n", worker, task)
		sleep := rand.Int63n(100)
		time.Sleep(time.Duration(sleep) * time.Millisecond)

		fmt.Printf("Worker: %d : Completed %s\n", worker, task)
	}
}
