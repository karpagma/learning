package main

import (
	"flag"
	"log"
	"os"
)

func main() {
	var stdout = flag.Bool("stdout", false, "log to stdout")

	if *stdout {
		log.SetOutput(os.Stdout)
	}
	log.Print("Hello, world!")
}
