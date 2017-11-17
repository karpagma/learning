package main

import "fmt"

func arr(vals *[5]int) {
	for i, _ := range vals {
		vals[i] *= 2
	}
}

func display(vals [5]int) {
	for _, v := range vals {
		fmt.Println(v)
	}
}

func main() {
	vals := [5]int{1, 2, 3, 4, 5}
	arr(&vals)

	display(vals)
}
