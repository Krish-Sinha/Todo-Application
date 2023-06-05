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
			<Home />
			<Completed />
			{/* <Router>
				<Routes>
					<Route
						path="/completed"
						element={<Completed />}></Route>
					<Route
						path="/incomplete"
						element={<Incomplete />}></Route>
					<Route
						path="/*"
						element={<h1>Error page</h1>}></Route>
				</Routes>
			</Router> */}
		</>
	)
}

export default App
