import logo from '../../assets/image/logo.png';
import styles from './Home.module.css';
export const Home = () => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.header__menu}>
					<ul className={`${styles.menu__list} ${styles.header__menuList}`}>
						<li>
							<a href="#" className={styles.menu__link}>Расписания</a>
						</li>
						<li>
							<a href="#" className={styles.menu__link}>Старостам</a>
						</li>
						<li>
							<a href="#" className={styles.menu__link}>Информация</a>
						</li>
					</ul>
					<input
						className={styles.searchInput}
						type="searchGroup"
						name="searchGroup"
						placeholder="Group"
					/>
				</nav>
			</div>
		</header>
		
		<main>
			<section className={styles.hero}>
				<div className={`${styles.container} ${styles.hero__container}`}>
					<img
						className={styles.hero__logo}
						src={logo}
						alt="Логотип"
						width="200"
						height="100"
					/>
					<h1 className={styles.hero__title}>Открой для себя <br /> истинное расписание</h1>
					<h3 className={styles.hero__subtitle}>
						Смотри актуальную информацию <br /> по расписанию на нашем сайте
					</h3>
					<button className={styles.default_btn}>Начать создавать</button>
				</div>
			</section>
		</main>
		</div>
	)
}