package main

import (
	"fmt"
	"sort"
)

type Names []string

func (names Names) Len() int {
	return len(names)
}

func (names Names) Swap(i, j int) {
	names[i], names[j] = names[j], names[i]
}

func (names Names) Less(i, j int) bool {
	return len(names[i]) < len(names[j])
}

func main() {
	names := Names{"apple", "mango", "banana", "jackfruit"}
	sort.Sort(names)
	for _, n := range names {
		fmt.Println(n)
	}
}
