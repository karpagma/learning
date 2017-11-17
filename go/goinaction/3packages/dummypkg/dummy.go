package dummypkg

import (
	"fmt"
	_ "github.com/madhanganesh/learning/go/goinaction/chapter3/postgres"
)

func Greet(msg string) {
	fmt.Println("Grret from dummypkg " + msg)
}

func AnotherGreet() string {
	return "yesss"
}
