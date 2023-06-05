import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Sticky from "react-stickynode"

const Header = () => {
	return (
		<Sticky>
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
		</Sticky>
	)
}

export default Header
