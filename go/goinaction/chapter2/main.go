package main

import (
	"log"
	"os"

	_ "github.com/madhanganesh/learning/go/goinaction/chapter2/matchers"
	"github.com/madhanganesh/learning/go/goinaction/chapter2/search"
)

func init() {
	log.SetOutput(os.Stdout)
}

func main() {
	search.Run("president")
}
