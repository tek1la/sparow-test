import { Button, Grid } from '@mui/material'
import TasksListItem from './TasksListItem'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

type Props = {
    tasksArray: any[]
}

type TaskArrayType = {
    description: string
    id: string
    ownerId: string
    modelName: string
    name: string
    position: string
    price: string
    taskType: string
}

const TasksList = ({ tasksArray }: Props) => {
    const [taskArray, setTaskArray] = useState<TaskArrayType[]>([])
    const firebaseConfig = {
        apiKey: 'AIzaSyAUMB9CZWhfaglmVcsHbMfvvLc8cSizf0M',
        authDomain: 'tek1la-test-project.firebaseapp.com',
        projectId: 'tek1la-test-project',
        storageBucket: 'tek1la-test-project.appspot.com',
        messagingSenderId: '945948088830',
        appId: '1:945948088830:web:30db819fad2396626b88af',
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    const db = firebase.firestore()

    const getTasks = async (path: string) => {
        try {
            const snapshot = await db.collection(path).get()
            const newTaskArray: any = snapshot.docs.map((doc) => doc.data())
            setTaskArray(newTaskArray)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(taskArray)
    return (
        <Grid container spacing={4} sx={{ margin: '30px 0' }}>
            <Grid>
                {tasksArray.map((task) => (
                    <Grid item key={task.docId}>
                        <Button
                            onClick={() =>
                                getTasks(
                                    'tasks_path/' +
                                        task.docId +
                                        '/' +
                                        task.docId +
                                        '_model_tasks'
                                )
                            }
                        >
                            {task.docId}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            {taskArray.map(
                ({
                    description,
                    id,
                    ownerId,
                    modelName,
                    name,
                    position,
                    price,
                    taskType,
                }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <TasksListItem
                            description={description}
                            id={id}
                            ownerId={ownerId}
                            modelName={modelName}
                            name={name}
                            position={position}
                            price={price}
                            taskType={taskType}
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default TasksList
