package main

import "fmt"

func arrayc(a [1]int) {
	a[0] = 9
}

func slicec(s []int) {
	s[0] = 9
}

func main() {
	a := [1]int{0}
	s := []int{0}

	arrayc(a)
	slicec(s)

	fmt.Println(a[0])
	fmt.Println(s[0])
}
