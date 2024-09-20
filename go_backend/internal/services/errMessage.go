package services

import (
	"algos/internal/types"
	"encoding/json"
	"net/http"
)

func ErrMess(w http.ResponseWriter, err error) {
	res := types.Result{Err: err.Error()}
	resp, _ := json.Marshal(res)
	w.Write(resp)
}
