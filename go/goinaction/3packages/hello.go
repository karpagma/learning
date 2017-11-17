package main

import (
	"github.com/madhanganesh/learning/go/goinaction/chapter3/dummypkg"
	_ "github.com/madhanganesh/learning/go/goinaction/chapter3/postgres"
)

func main() {
	// gocode set autobuild true -> to get autocompletion work
	dummypkg.Greet("ji")
}
