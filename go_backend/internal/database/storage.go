package database

type DataBase interface {
	SetStandartSchedule(group int, sched []byte) error
	//SetChangedSchedule(group int, newSched []byte) error
	GetStandartSchedule(group int) ([]byte, error)
	//GetChangedSchedule(group int) ([]byte, error)
}
