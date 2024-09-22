import Pencil from '../../assets/image/Pencil.png';
import Главная from '../../assets/image/Главная.png';
import Profile from '../../assets/image/Профиль 2.png';
import Файлы from '../../assets/image/Файлы.png';
import styles from './Schedule.module.css';
export const Schedule = () => {
	return (
		<div>
			<div className={styles.container}>
				<aside className={styles.leftSidebar}>
					<div className={styles.menuItem}>
						<div className={styles.profilePic}></div>
					</div>
					<hr />

					<div className={styles.menuItem}>
						<img src={Profile} alt='Профиль' />
					</div>
					<div className={styles.menuItem}>
						<img src={Главная} alt='Главная' />
					</div>
					<div className={styles.menuItem}>
						<img src={Файлы} alt='Файлы' />
					</div>
					<div className={styles.menuItem}>
						<img src={Pencil} alt='Редактировать' />
					</div>
				</aside>

				<main className={styles.scheduleContainer}>
					<div className={styles.header}>
						<div className={styles.dayHeader}>Понедельник, 16 сентября</div>
						<div className={styles.dayHeader}>Понедельник, 16 сентября</div>
						<div className={styles.dayHeader}>Понедельник, 16 сентября</div>
						<div className={styles.dayHeader}>Понедельник, 16 сентября</div>
						<div className={styles.dayHeader}>Понедельник, 16 сентября</div>
					</div>
					<div className={styles.schedule}>
						<div className={styles.week}>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									9:30 <br />
									11:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									11:10 <br />
									12:40
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									13:00 <br />
									14:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									15:00 <br />
									16:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									16:40 <br />
									18:10
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									18:30 <br />
									20:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
						</div>
						<div className={styles.week}>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									9:30 <br />
									11:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									11:10 <br />
									12:40
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									13:00 <br />
									14:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									15:00 <br />
									16:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									16:40 <br />
									18:10
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									18:30 <br />
									20:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
						</div>
						<div className={styles.week}>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									9:30 <br />
									11:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									11:10 <br />
									12:40
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									13:00 <br />
									14:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									15:00 <br />
									16:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									16:40 <br />
									18:10
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									18:30 <br />
									20:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
						</div>
						<div className={styles.week}>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									9:30 <br />
									11:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									11:10 <br />
									12:40
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									13:00 <br />
									14:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									15:00 <br />
									16:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									16:40 <br />
									18:10
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									18:30 <br />
									20:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
						</div>
						<div className={styles.week}>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									9:30 <br />
									11:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									11:10 <br />
									12:40
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									13:00 <br />
									14:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									15:00 <br />
									16:30
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									16:40 <br />
									18:10
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
							<div className={styles.lesson}>
								<p className={styles.lessonTime}>
									18:30 <br />
									20:00
								</p>
								<p className={styles.lessonInfo}>
									<strong className={styles.lessonName}>
										Название предмета
									</strong>
									<br />
									Аудитория
									<br />
									Фамилия преподавателя
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
