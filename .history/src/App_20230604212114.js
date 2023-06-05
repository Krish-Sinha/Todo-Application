import React, { useState } from "react"

import "./App.css"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Completed from "./Components/Navigate/Completed"
import Incomplete from "./Components/Navigate/Incomplete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
	const [toDo, setToDo] = useState([])
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/">
						<Home
							toDo={toDo}
							setToDo={setToDo}
						/>
					</Route>
					<Route path="/completed">
						<Completed toDo={toDo} />
					</Route>
					<Route path="/incomplete">
						<Incomplete toDo={toDo} />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
