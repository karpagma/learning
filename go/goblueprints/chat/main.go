package main

import (
	"log"
	"net/http"
	"path/filepath"
	"sync"
	"text/template"

	"github.com/stretchr/gomniauth"
	"github.com/stretchr/gomniauth/providers/google"
	"github.com/stretchr/objx"
)

const (
	clientId     = "890611087237-e78c9effjebbcnsal9d0880jtsbupqi0.apps.googleusercontent.com"
	clientSecret = "FCYoI4YtO-mumBJyH5ijsT2o"
)

type templateHandler struct {
	once     sync.Once
	filename string
	templ    *template.Template
}

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t.once.Do(func() {
		t.templ = template.Must(template.ParseFiles(filepath.Join("templates", t.filename)))
	})

	data := map[string]interface{}{
		"Host": r.Host,
	}
	if authCookie, err := r.Cookie("auth"); err == nil {
		data["UserData"] = objx.MustFromBase64(authCookie.Value)
	}

	t.templ.Execute(w, data)
}

func logout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:   "auth",
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	})
	w.Header().Set("Location", "/chat")
	w.WriteHeader(http.StatusTemporaryRedirect)
}

func main() {
	room := newRoom(UseGravatar)

	// setup up gommniauth
	gomniauth.SetSecurityKey("some long key")
	gomniauth.WithProviders(
		google.New(clientId, clientSecret, "http://localhost:8080/auth/callback/google"),
	)

	http.HandleFunc("/auth/", loginHandler)
	http.HandleFunc("/logout", logout)
	http.Handle("/login", &templateHandler{filename: "login.html"})
	http.Handle("/chat", MustAuth(&templateHandler{filename: "chat.html"}))
	http.Handle("/room", room)
	http.Handle("/upload", &templateHandler{filename: "upload.html"})
	http.Handle("/avatars/",
		http.FileServer(http.Dir("./avatars")))

	go room.run()

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}
