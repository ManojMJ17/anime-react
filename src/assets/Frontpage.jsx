import "../components/Navbar.css";
import Container from "../components/Container";
import Search from "../components/Search";
import Sideimg from "../components/Sideimage";
import Finalbutton from "../components/Finalbutoon";


function Frontpage() {
	return (
		<>
			<div className="main-container">
				<div className="min-content">
					<div className="left">
						<Container />
						<Search />
					</div>
					<div className="right">
						<Sideimg />
					</div>
				</div>
			</div>
			<div>
				<Finalbutton />
			</div>
		</>
	);
}

export default Frontpage;
