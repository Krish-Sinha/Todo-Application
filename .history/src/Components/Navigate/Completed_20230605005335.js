import React from "react"
import "./Completed.css"

const Completed = ({ toDo }) => {
	return (
		<div className="heading">
			COMPLETED TASKS
			{toDo &&
				toDo
					.filter((todo) => todo.status === true)
					.map((todo) => <div className="complete">{todo.title}</div>)}
		</div>
	)
}

export default Completed
