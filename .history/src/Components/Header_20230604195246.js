import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="Main">
			<div className="Head">
				<Link to="/">ToDo</Link>
				<Link to="/completed">Completed</Link>
				<Link to="/incomplete">Incomplete</Link>
			</div>
		</div>
	)
}

export default Header
