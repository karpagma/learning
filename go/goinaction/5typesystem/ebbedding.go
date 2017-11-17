package main

import (
	"fmt"
)

type user1 struct {
	name  string
	email string
}

func (u *user1) notify() {
	fmt.Printf("email user %s[%s]\n", u.name, u.email)
}

type admin1 struct {
	user1
	level string
}

func (a *admin1) notify() {
	fmt.Printf("admin email %s[%s]\n", a.name, a.email)
}

func main() {
	ad := admin1{
		user1: user1{"john", "john@mail.com"},
		level: "super",
	}

	ad.notify()
}
