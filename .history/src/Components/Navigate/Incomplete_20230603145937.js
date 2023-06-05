import React from "react"

const Incompleted = ({ toDo }) => {
	return (
		<div>
			{toDo &&
				toDo
					.filter((todo) => todo.status === true)
					.map((todo) => <div>{todo.title}</div>)}
		</div>
	)
}

export default Incompleted
