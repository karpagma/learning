package main

import "fmt"

func zero(ptr *[5]int) {
	for i := range ptr {
		ptr[i] = 0
	}
}

func zero1(ptr *[5]int) {
	*ptr = [5]int{}
}

func main() {
	a := [5]int{1, 2, 3, 4, 5}

	zero1(&a)

	for _, v := range a {
		fmt.Printf("%d\t", v)
	}

	fmt.Println()
}
