package main

import (
	"fmt"
	"sync"
	"time"
)

type worker struct {
	once sync.Once
	time string
}

func (w *worker) do() {
	w.once.Do(func() {
		w.time = time.Now().String()
	})

	fmt.Println("time is ", w.time)
}

func (w *worker) other() {
	w.once.Do(func() {
		w.time = time.Now().String()
	})

	fmt.Println("time in ", w.time)
}

func main() {
	w := &worker{}
	w.do()
	time.Sleep(5 * time.Second)
	w.do()
	time.Sleep(5 * time.Second)
	w.other()
}
