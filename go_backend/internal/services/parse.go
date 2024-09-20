package services

import (
	"algos/internal/types"
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"strings"

	"github.com/gocolly/colly/v2"
)

func findGroup(group string) (string, error) {
	groupId := ""

	c := colly.NewCollector()
	c.OnHTML("select[name=\"ctl00$cphMain$ctl05\"]", func(h *colly.HTMLElement) {
		h.ForEach("option", func(i int, g *colly.HTMLElement) {
			if g.Text == group {
				groupId = g.Attr("value")
				return
			}
		})
	})

	err := c.Visit("https://guap.ru/rasp/")
	if err != nil {
		return "", err
	}

	if groupId == "" {
		return "", errors.New("group not found")
	}
	return groupId, nil

}

func parsSchedule(groupId string) (types.Schedule, error) {
	sched := types.Schedule{}
	upDays := []types.Day{}
	downDays := []types.Day{}

	c := colly.NewCollector()
	c.OnHTML(".result", func(h *colly.HTMLElement) {
		upDay := types.Day{}
		downDay := types.Day{}

		subj := types.Subj{}

		h.ForEach(".study, h3, h4", func(i int, g *colly.HTMLElement) {
			if g.Name == "h3" {
				upDays = append(upDays, upDay)
				downDays = append(downDays, downDay)

				upDay = types.Day{Name: g.Text}
				downDay = types.Day{Name: g.Text}
			}

			if g.Name == "h4" {
				if g.Text != "вне сетки расписания (—)" {
					subj = types.Subj{Num: string(g.Text[0])}
				}
			}

			if g.Name == "div" {
				subj.Name = strings.Split(g.ChildText("span"), " – ")[1]
				place := g.ChildText("em")[4:]
				subj.Place, subj.Classroom = strings.Split(place, ", ауд. ")[0], strings.Split(place, ", ауд. ")[1]

				g.ForEach("div", func(i int, j *colly.HTMLElement) {
					j.ForEach("span", func(i int, k *colly.HTMLElement) {
						if k.Attr("class") == "preps" {
							subj.Teachers = append(subj.Teachers, k.ChildTexts("a")...)
						} else {
							subj.Groups = append(subj.Groups, k.ChildTexts("a")...)
						}
					})
				})

				b := g.ChildTexts("b")
				if len(b) == 1 {
					subj.Type = b[0]

					upDay.Lessons = append(upDay.Lessons, subj)
					downDay.Lessons = append(downDay.Lessons, subj)

				} else {
					subj.Type = b[1]

					if b[0] == "▼" {
						downDay.Lessons = append(downDay.Lessons, subj)
					} else {
						upDay.Lessons = append(upDay.Lessons, subj)
					}
				}
			}
		})
	})

	err := c.Visit("https://guap.ru/rasp/?g=" + groupId)
	if err != nil {
		return sched, err
	}

	sched.UpDays = upDays[1:]
	sched.DownDays = downDays[1:]

	return sched, nil
}

func GetStandartSchedule(w http.ResponseWriter, r *http.Request) {
	resp := types.Result{}
	group, err := io.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		ErrMess(w, err)
		return
	}

	groupId, err := findGroup(string(group))
	if err != nil {
		ErrMess(w, err)
		return
	}

	sched, err := parsSchedule(groupId)
	resp.Schedule = sched
	if err != nil {
		ErrMess(w, err)
		return
	}

	sched.Group = string(group)
	resp.Schedule = sched

	answ, err := json.Marshal(resp)
	if err != nil {
		ErrMess(w, err)
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Write(answ)
}
