package main

import (
	"fmt"
)

type usr struct {
	name  string
	email string
}

func (u usr) notify() {
	u.name = "changed"
	fmt.Printf("Sending usr Email to %s<%s>\n", u.name, u.email)
}

func (u usr) toString() {
	fmt.Printf("usr: %s, email: %s\n", u.name, u.email)
}

// change email implements a method with a pointer receiver
func (u *usr) changeEmail(email string) {
	u.email = email
}

func main() {
	bill := &usr{"Bill", "bill@email.com"}
	fmt.Printf("%v", bill)
	bill.notify()

	bill.toString()

	bill.changeEmail("abc")
	bill.toString()
}
