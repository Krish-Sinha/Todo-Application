import React, { useState } from "react"

import "./App.css"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Completed from "./Components/Navigate/Completed"
import Incomplete from "./Components/Navigate/Incomplete"
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom"

const App = () => {
	const [toDo, setToDo] = useState([])
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								toDo={toDo}
								setToDo={setToDo}
							/>
						}
					/>
					<Route
						path="/completed"
						element={<Completed toDo={toDo} />}
					/>
					<Route
						path="/incomplete"
						element={<Incomplete toDo={toDo} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
