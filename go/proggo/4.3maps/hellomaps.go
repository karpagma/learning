package main

import (
	"fmt"
	"sort"
)

func main() {
	ages := make(map[string]int)
	ages["madhan"] = 41
	ages["swarna"] = 39
	ages["shrishti"] = 14
	ages["shaashvat"] = 4

	sortednames := make([]string, 0, len(ages))
	for name := range ages {
		sortednames = append(sortednames, name)
	}
	sort.Strings(sortednames)

	for _, name := range sortednames {
		fmt.Printf("%s - %d\n", name, ages[name])
	}
}
