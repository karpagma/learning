package main

import "fmt"

func display(s []int, msg string) {
	fmt.Println("-----" + msg + "-----")
	for _, v := range s {
		fmt.Println(v)
	}
	fmt.Println()
}

func main() {
	a := []int{1, 2, 3, 4, 5}
	b := a[1:3]
	c := append(b, 6)

	display(b, "b")
	display(c, "c - append(b)")
	display(a, "a - original slice")
}
