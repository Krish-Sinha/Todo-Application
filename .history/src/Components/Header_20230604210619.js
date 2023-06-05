import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="Main">
			<div className="Head">
				<Link to={"/"}>Todo</Link>

				<Link to={"/completed"}>Completed</Link>
				<p>Incomplete</p>
			</div>
		</div>
	)
}

export default Header
