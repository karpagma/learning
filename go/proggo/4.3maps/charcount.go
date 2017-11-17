package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

func main1() {
	counts := make(map[rune]int)

	in := bufio.NewReader(os.Stdin)
	for {
		r, _, err := in.ReadRune()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Fprintf(os.Stderr, "charcount: %v\n", err)
			os.Exit(1)
		}

		counts[r]++
		fmt.Println(counts)
	}

	for c, n := range counts {
		fmt.Printf("%q\t%d\n", c, n)
	}
}
