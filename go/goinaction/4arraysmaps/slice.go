package main

import "fmt"

func display1(vals *[]int) {
	for _, v := range *vals {
		fmt.Println(v)
	}
}

func isref(vals []int) {
	vals[0] = 25
}

func main() {
	vals := []int{1, 2, 3, 4, 5}
	svals := vals[1:3]

	fmt.Println("change@i")
	display1(&vals)
	svals[0] *= 2
	display1(&vals)

	fmt.Println("append")
	display1(&vals)
	svals = append(svals, 29)
	display1(&vals)
}
