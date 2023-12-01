import styles from "./styles.module.css";

import Cards from "../Cards/Cards";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Satyam Project Store</h1>

				<div>
					
					
				</div>
			
			</nav>
            <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			<Cards/>
		</div>
	);
};

export default Main;


// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main/Main";
// import Signup from "./components/Singup/Singup";
// import Login from "./components/Login/Login";

// function App() {
//   const user = localStorage.getItem("token");
//   return (
//     <Routes>
//     {user && <Route path="/" exact element={<Main />} />}
//     <Route path="/signup" exact element={<Signup />} />
//     <Route path="/login" exact element={<Login />} />
//     <Route path="/" element={<Navigate replace to="/login" />} />
//   </Routes>
//   );
// }

// export default App;
