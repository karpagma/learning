package main

import (
	"fmt"
)

func changeSlice(s *[]int) {
	//*s = []int{5}
	(*s)[0] = 5
}

func changeArray(a *[1]int) {
	//*a = [1]int{10}
	(*a)[0] = 10
}

func changeInt(i *int) {
	//*i = 9
	u := 0
	i = &u
}

func main() {
	s := []int{1}
	changeSlice(&s)
	fmt.Println(s[0])

	a := [1]int{8}
	changeArray(&a)
	fmt.Println(a[0])

	i := 7
	changeInt(&i)
	println(i)
}
