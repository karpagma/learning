package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func main() {
	config := &aws.Config{
		Region:   aws.String("us-east-1"),
		Endpoint: aws.String("http://localhost:8000"),
	}
	svc := dynamodb.New(session.New(config))
	params := &dynamodb.ListTablesInput{}
	resp, err := svc.ListTables(params)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	fmt.Println(resp)
}
