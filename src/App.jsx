import "./App.css";
import Frontpage from "./assets/Frontpage";
import Home from "./assets/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./assets/Movies";
import Tvseries from "./assets/Tvseries";
import Manga from "./assets/Manga";
import Topairing from "./assets/Topairing";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Frontpage />}></Route>
				<Route path="/content_page" element={<Home />}></Route>
				<Route path="/movies" element={<Movies />}></Route>
				<Route path="/tv_series" element={<Tvseries />}></Route>
				<Route path="/manga" element={<Manga />}></Route>
				<Route path="/top_airing" element={<Topairing />}></Route>
			</Routes>
		</>
	);
}

export default App;
