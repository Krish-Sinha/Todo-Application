import React from "react"

import "./App.css"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Completed from "./Components/Navigate/Completed"
import Incomplete from "./Components/Navigate/Incomplete"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/completed"
						element={<Completed />}
					/>
					<Route
						path="/incomplete"
						element={<Incomplete />}
					/>
					<Route
						path="/*"
						element={<h1>Error page</h1>}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
