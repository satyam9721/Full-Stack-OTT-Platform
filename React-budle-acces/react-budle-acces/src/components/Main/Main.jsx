import styles from "./styles.module.css";

import Cards from "../Cards/Cards";
import LandingPage from "../Movie/LandingPage";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Satyam OTT Platform</h1>

				<div>
					
					
				</div>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<LandingPage/>
			
		</div>
	);
};

export default Main;
