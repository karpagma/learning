package main

import (
	"fmt"
)

type EmployeeA struct {
	Name string
	Age  int
}

func (e *EmployeeA) String() string {
	return fmt.Sprintf("%s:%d", e.Name, e.Age)
}

func main() {
	e1 := &EmployeeA{"madhan", 41}
	e2 := &EmployeeA{"madhan", 41}

	fmt.Println(e1.String())
	fmt.Println(e2.String())

	if *e1 == *e2 {
		fmt.Println("e1 == e2")
	}
}
