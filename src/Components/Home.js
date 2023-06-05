import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCircleCheck,
	faPen,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import { Text, Button, Group, HoverCard } from "@mantine/core"

const Home = ({ toDo, setToDo }) => {
	// Tasks (ToDo List) State

	// Temp State
	const [newTask, setNewTask] = useState("")
	const [updateData, setUpdateData] = useState("")

	const [query, setQuery] = useState("")
	const [filtered, setFiltered] = useState([])

	useEffect(() => {
		const t = toDo.filter((item) => item.title.includes(query))
		setFiltered(t)
	}, [query])

	// Add task
	//////////////////////////////////////////
	const addTask = () => {
		if (newTask) {
			let num = toDo.length + 1
			let newEntry = { id: num, title: newTask, status: false }
			setToDo([...toDo, newEntry])
			setNewTask("")
		}
	}

	// Delete task
	/////////////////////
	const deleteTask = (id) => {
		let newTasks = toDo.filter((task) => task.id !== id)
		setToDo(newTasks)
	}

	// mark task as done or completed
	//////////////////////////////////////////
	const markDone = (id) => {
		const newTasks = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status }
			}
			return task
		})
		setToDo(newTasks)
	}

	// cancel update
	//////////////////////////////////////////
	const cancelUpdate = () => {
		setUpdateData("")
	}

	// Change task for update
	//////////////////////////////////////////
	const changeTask = (e) => {
		let newEntry = {
			id: updateData.id,
			title: e.target.value,
			status: updateData.status ? true : false,
		}
		setUpdateData(newEntry)
	}

	// update task
	//////////////////////////////////////////
	const updateTask = () => {
		let filterRecords = [...toDo].filter((task) => task.id !== updateData.id)
		let updatedObject = [...filterRecords, updateData]
		setToDo(updatedObject)
		setUpdateData("")
	}

	return (
		<div>
			<div className="container App">
				<input
					className="search"
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search a To-Do..."
				/>
				{query.length > 0 ? (
					filtered.map((v, index) => (
						<div
							className="flex"
							key={index}>
							{v.title}
						</div>
					))
				) : (
					<div className="flex"></div>
				)}

				{updateData && updateData ? (
					<>
						<div className="row">
							<div className="col">
								<input
									value={updateData && updateData.title}
									onChange={(e) => changeTask(e)}
									className="form-control form-control-lg"
								/>
							</div>
							<div className="col-auto">
								<button
									className="btn btn-lg btn-success mr-20"
									onClick={updateTask}>
									Update
								</button>
								<button
									className="btn btn-lg btn-warning"
									onClick={cancelUpdate}>
									Cancel
								</button>
							</div>
						</div>
						<br />
					</>
				) : (
					<>
						<div className="row">
							<div className="col">
								<input
									value={newTask}
									onChange={(e) => setNewTask(e.target.value)}
									className="form-control form-control-lg"
									placeholder="What is the task today?"
								/>
							</div>

							<div className="col-auto">
								<Group position="center">
									<HoverCard
										openDelay={1000}
										width={280}
										shadow="md">
										<HoverCard.Target>
											<Button
												variant="gradient"
												gradient={{
													from: "teal",
													to: "lime",
													deg: 105,
												}}
												onClick={addTask}>
												Add Task
											</Button>
										</HoverCard.Target>
										<HoverCard.Dropdown>
											<Text
												color="black"
												size="sm">
												Click to add the task
											</Text>
										</HoverCard.Dropdown>
									</HoverCard>
								</Group>
							</div>
						</div>
						<br />
					</>
				)}

				{/* If there are no to dos in state, display a message   */}
				{toDo && toDo.length ? "" : "No tasks..."}

				{/* Show to dos   */}
				{toDo &&
					toDo
						.sort((a, b) => (a.id > b.id ? 1 : -1))
						.map((task, index) => {
							return (
								<React.Fragment key={task.id}>
									<div className="col taskBg">
										<div
											// if task status is true, add class to this div named as done
											className={task.status ? "done" : ""}>
											{/* Show number of task */}
											<span className="taskNumber">{index + 1}</span>
											<span className="taskText">{task.title}</span>
										</div>

										<div className="iconsWrap">
											<span
												onClick={(e) => markDone(task.id)}
												title="Completed / Not Completed">
												<FontAwesomeIcon icon={faCircleCheck} />
											</span>

											{task.status ? null : (
												<span
													title="Edit"
													onClick={() =>
														setUpdateData({
															id: task.id,
															title: task.title,
															satus: task.status ? true : false,
														})
													}>
													<FontAwesomeIcon icon={faPen} />
												</span>
											)}

											<span
												onClick={() => deleteTask(task.id)}
												title="Delete">
												<FontAwesomeIcon icon={faTrashCan} />
											</span>
										</div>
									</div>
								</React.Fragment>
							)
						})}
			</div>

			<div className="completed">
				<div className="headingCom">COMPLETED TASKS</div>
				<br></br>

				<div>
					{toDo &&
						toDo
							.filter((todo) => todo.status === true)
							.map((todo) => <div className="complete">{todo.title}</div>)}
				</div>
			</div>

			<div className="incompleted">
				<div className="headingInc">INCOMPLETED TASKS</div>
				<br></br>

				<div>
					{toDo &&
						toDo
							.filter((todo) => todo.status === false)
							.map((todo) => <div className="input">{todo.title}</div>)}
				</div>
			</div>
		</div>
	)
}

export default Home
