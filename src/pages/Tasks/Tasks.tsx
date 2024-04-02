import TasksList from 'component/Tasks/TasksList'

type Props = {
    tasksArray: any
}
const Tasks = ({ tasksArray }: Props) => {
    return (
        <>
            <TasksList tasksArray={tasksArray} />
        </>
    )
}
export default Tasks
