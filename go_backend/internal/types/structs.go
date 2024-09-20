package types

type Subj struct {
	Name      string   `json:"name"`
	Num       string   `json:"num"`
	Type      string   `json:"type"`
	Teachers  []string `json:"teachers"`
	Groups    []string `json:"groups"`
	Place     string   `json:"place"`
	Classroom string   `json:"classroom"`
}

type Day struct {
	Name    string `json:"name"`
	Lessons []Subj `json:"lessons"`
}

type Schedule struct {
	Group    string `json:"group"`
	UpDays   []Day  `json:"up_days"`
	DownDays []Day  `json:"down_days"`
}

type Result struct {
	Schedule Schedule `json:"schedule"`
	Err      string   `json:"error"`
}
