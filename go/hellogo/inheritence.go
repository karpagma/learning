package main

import (
	"fmt"
)

type Person struct {
	Name string
}

func (p *Person) Eat() {
	fmt.Println("eating")
}

type Doctor struct {
	Person
}

func (d *Doctor) Heal() {
	fmt.Println("healing")
}

func main() {
	p := &Person{"raj"}
	d := &Doctor{Person{"katy"}}
	d1 := &Doctor{*p}

	p.Eat()
	d.Heal()

	d1.Eat()
	d1.Heal()
}
