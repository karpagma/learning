package main

import "github.com/melvinmt/firebase"

type PersonName1 struct {
	First string
	Last  string
}

type Person1 struct {
	Name PersonName1
}

func main() {
	var err error
	url := "https://gaeviapy.firebaseio.com/users/madhan/name"
	authToken := "loSTRbiPeGtrER5dP33Kp8N4SBTpuJ90eWiX8UUi"

	ref := firebase.NewReference(url).Auth(authToken)
	personName := PersonName1{
		First: "Madhan Ganesh",
		Last:  "L",
	}

	if err = ref.Write(personName); err != nil {
		panic(err)
	}
}
