import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar text-light bg-info mb-3">
				<img
					style={{
						width: "30px",
						height: "40px"
					}}
					src="https://www.askideas.com/media/48/Nice-Microphone-Tattoo-Drawing.jpg"
				/>
				<Link to="/">
					<span className="text-light font-italic h2">
						St. Martin de Porres Visual and Performing Arts Ministry
					</span>
				</Link>

				<Link to="/">
					<button className="btn bg-secondary">Home</button>
				</Link>

				{/*<Link to="/events/">
					<button className="btn bg-secondary">Events</button>
				</Link>*/}
				<Link to="/espanol/">
					<button className="btn bg-secondary">Espanol</button>
				</Link>
				<Link to="/archive">
					<button className="btn bg-secondary">Archive</button>
				</Link>
				<Link to="/login">
					<button className="btn bg-secondary">Login</button>
				</Link>
			</nav>
		);
	}
}
