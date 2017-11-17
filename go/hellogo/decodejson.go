package main

import (
	"encoding/json"
	"fmt"
)

type Protocol struct {
	ID          string                 `json:"id"`
	ProtcolID   string                 `json:"protocolid"`
	Version     string                 `json:"version"`
	EquipmentID string                 `json:"equipmentid"`
	Library     string                 `json:"library"`
	Folder      string                 `json:"folder"`
	NewAge      int                    `json:"newage"`
	Age         int                    `json:"age"`
	Tags        []string               `json:"tags"`
	Params      map[string]interface{} `json:"deviceparams"`
}

func main() {
	jsonb := []byte(`{
		"id": "7ac4a4f0-0d2c-11e6-a148-3e1d05defe78",
		"protocolid": "3.2 CHEST PULM",
		"version": "v1",
		"equipmentid": "COY142AB",
		"library": "GE",
		"folder": "Adult/Chest",
		"age": 23,
		"tags": ["adult", "chest"],
		"deviceparams": {
			"kvp": 0.3,
			"patient_pos": "4, 5, 6"
		}
	}`)

	var protocol Protocol
	if err := json.Unmarshal(jsonb, &protocol); err != nil {
		fmt.Printf("Error in unmarshal: %v\n", err)
		return
	}

	fmt.Printf("Library: %s\n", protocol.Library)
	fmt.Printf("NewAge: %d\n", protocol.NewAge)
	fmt.Printf("Age: %d\n", protocol.Age)
	for _, tag := range protocol.Tags {
		fmt.Printf("Tag: %s\n", tag)
	}

	for k, v := range protocol.Params {
		fmt.Printf("%s: %v\n", k, v)
	}
}
