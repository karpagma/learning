package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

type Employee struct {
	ID     int     `json:"id"`
	Name   string  `json:"name"`
	Salary float32 `json:"salary"`
}

func main() {
	db, err := sql.Open("postgres", "user=postgres password=sa dbname=hello sslmode=disable")
	if err != nil {
		log.Println("Error: the data source arguments are not valid")
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("Error: Could not not establish a connection with database: %v\n", err)
	}

	//queryStmt, err := db.Prepare("select data from emp where data->> 'salary' <= 25::TEXT AND data->> 'name' = 'Madhan'")
	/*queryStmt, err := db.Prepare("select data from emp")
	if err != nil {
		log.Fatalf("Query error %v", err)
	}

	rows, err := queryStmt.Query()
	if err != nil {
		log.Fatalf("Error query: %v", err)
	}
	defer rows.Close()

	for rows.Next() {
		var data string
		if err := rows.Scan(&data); err != nil {
			log.Fatal(err)
		}
		var emp Employee
		err := json.Unmarshal([]byte(data), &emp)
		if err != nil {
			log.Fatalln("unmarshal error")
		}

		fmt.Printf("ID: %d, Name: %s, Salary: %f\n", emp.ID, emp.Name, emp.Salary)
	}*/

	// insert
	emp := Employee{
		ID:     2,
		Name:   "Madhan",
		Salary: 25.00,
	}
	b, err := json.Marshal(emp)
	if err != nil {
		log.Fatal("error marshal")
	}
	emps := string(b)
	stmt, err := db.Prepare(fmt.Sprintf("insert into emp(data) values('%s')", emps))
	if err != nil {
		log.Fatalf("Qeury erro %v", err)
	}

	_, err = stmt.Exec()
	if err != nil {
		log.Printf("err in exec: %v\n", err)
	}
}
