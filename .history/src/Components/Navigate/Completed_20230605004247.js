import React from "react"

const Completed = ({ toDo }) => {
	return (
		<div className="complete">
			{toDo &&
				toDo
					.filter((todo) => todo.status === true)
					.map((todo) => <div>{todo.title}</div>)}
		</div>
	)
}

export default Completed
