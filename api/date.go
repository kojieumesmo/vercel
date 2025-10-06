package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	// Apply authentication middleware
	WithAuth(func(w http.ResponseWriter, r *http.Request) {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})(w, r)
}