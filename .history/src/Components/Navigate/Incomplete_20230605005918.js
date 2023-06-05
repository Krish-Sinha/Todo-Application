import React from "react"
import "./Incomplete.css"

const Incompleted = ({ toDo }) => {
	return (
		<>
			<div>Incomplete Tasks</div>
			<div>
				{toDo &&
					toDo
						.filter((todo) => todo.status === false)
						.map((todo) => <div>{todo.title}</div>)}
			</div>
		</>
	)
}

export default Incompleted
