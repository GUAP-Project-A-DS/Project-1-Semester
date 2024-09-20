package main

import (
	"algos/internal/services"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	router := chi.NewRouter()

	router.Post("/get_standart", services.GetStandartSchedule)

	http.ListenAndServe(":8080", router)
}
