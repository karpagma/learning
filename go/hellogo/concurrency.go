package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func readUrl(url string, responses chan string) {
	res, _ := http.Get(url)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	responses <- string(body)
}

func main() {
	urls := []string{"http://python.org", "http://golang.org"}
	responses := make(chan string)

	for _, url := range urls {
		go readUrl(url, responses)
	}

	for response := range responses {
		fmt.Println(response)
	}
}
