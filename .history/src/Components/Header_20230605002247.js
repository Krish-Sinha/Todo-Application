import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="Main">
			<div className="Head">
				<Link
					className="leftside"
					to={"/"}>
					Todo
				</Link>

				<Link
					className="right"
					to={"/completed"}>
					Completed
				</Link>
				<Link
					className="left "
					to={"/incomplete"}>
					Incomplete
				</Link>
			</div>
		</div>
	)
}

export default Header
