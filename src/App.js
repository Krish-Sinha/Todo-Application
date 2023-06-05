import React, { useState } from "react"
import "./App.css"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Completed from "./Components/Navigate/Completed"
import Incomplete from "./Components/Navigate/Incomplete"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
	const [toDo, setToDo] = useState([])
	return (
		<>
			<BrowserRouter>
				<Header />
				<br></br>
				<br></br>
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

				{/* <Completed />
				<Incomplete /> */}
			</BrowserRouter>
		</>
	)
}

export default App
