import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

type Props = {}
type MenuShowType = {
    onUsers: boolean
    onTasks: boolean
    onModels: boolean
    onDoneWork: boolean
    onHome: boolean
}
const App = (props: Props) => {
    const [usersArray, setUsersArray] = useState([])
    const [tasksArray, setTasksArray] = useState([])
    const [modelsArray, setModelsArray] = useState([])
    const [doneWorksArray, setDoneWorksArray] = useState([])
    const firebaseConfig = {
        apiKey: 'AIzaSyAUMB9CZWhfaglmVcsHbMfvvLc8cSizf0M',
        authDomain: 'tek1la-test-project.firebaseapp.com',
        projectId: 'tek1la-test-project',
        storageBucket: 'tek1la-test-project.appspot.com',
        messagingSenderId: '945948088830',
        appId: '1:945948088830:web:30db819fad2396626b88af',
    }

    firebase.initializeApp(firebaseConfig)

    const db = firebase.firestore()

    const getUsers = async () => {
        try {
            const snapshot = await db.collection('users').get()
            const newUsersArray: any = snapshot.docs.map((doc) => doc.data())
            setUsersArray(newUsersArray)
        } catch (error) {
            console.error(error)
        }
    }
    const getTasks = async () => {
        try {
            const snapshot = await db.collection('tasks_path').get()
            const newTasksArray: any = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            }))
            setTasksArray(newTasksArray)
        } catch (error) {
            console.error(error)
        }
    }
    const getModels = async () => {
        try {
            const snapshot = await db.collection('model_path').get()
            const newModelsArray: any = snapshot.docs.map((doc) => doc.data())
            setModelsArray(newModelsArray)
        } catch (error) {
            console.error(error)
        }
    }
    const getDoneWork = async () => {
        try {
            const snapshot = await db.collection('done_work_path').get()
            const newDoneWorksArray: any = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            }))
            setDoneWorksArray(newDoneWorksArray)
        } catch (error) {
            console.error(error)
        }
    }

    const [menuShow, setMenuShow] = useState<MenuShowType>({
        onUsers: false,
        onTasks: false,
        onModels: false,
        onDoneWork: false,
        onHome: false,
    })
    const showMenuItem = (
        users: any,
        tasks: any,
        models: any,
        doneWork: any,
        home: any
    ) => {
        setMenuShow((prevState) => ({
            ...prevState,
            onUsers: users ? true : false,
            onTasks: tasks ? true : false,
            onModels: models ? true : false,
            onDoneWork: doneWork ? true : false,
            onHome: home ? true : false,
        }))
    }
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const logining = () => {
        setIsLogin((prevState) => (prevState ? false : true))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                showMenuItem={showMenuItem}
                isLogin={isLogin}
                getUsers={getUsers}
                getTasks={getTasks}
                getModels={getModels}
                getDoneWork={getDoneWork}
            />
            <Main
                menuShow={menuShow}
                isLogin={isLogin}
                logining={logining}
                usersArray={usersArray}
                tasksArray={tasksArray}
                modelsArray={modelsArray}
                doneWorksArray={doneWorksArray}
            />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
