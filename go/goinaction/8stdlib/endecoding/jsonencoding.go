package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type gResult struct {
	GsearchResultClass string `json:"GsearchResultClass"`
	UnescapedURL       string `json:"unescapedUrl"`
	URL                string `json:"url"`
	VisibleURL         string `json:"visibleUrl"`
	CacheURL           string `json:"cacheUrl"`
	Title              string `json:"title"`
	TitleNoFormatting  string `json:"titleNoFormatting"`
	Content            string `json:"content"`
}

type gResponseData struct {
	Result []gResult `json:"results"`
}

type gResponse struct {
	ResponseData gResponseData `json:"responseData"`
}

func main() {
	uri := "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&q=golang"
	res, err := http.Get(uri)
	if err != nil {
		log.Println("ERROR:", err)
		return
	}

	defer res.Body.Close()

	var gr gResponse
	err = json.NewDecoder(res.Body).Decode(&gr)
	if err != nil {
		log.Println("ERROR:", err)
		return
	}

	fmt.Println(gr)
}
