import Container from '@mui/material/Container'
import DoneWork from 'pages/DoneWork/DoneWork'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Models from 'pages/Models/Models'
import Tasks from 'pages/Tasks/Tasks'
import Users from 'pages/Users/Users'

type Props = {
    menuShow: {
        onUsers: boolean
        onTasks: boolean
        onModels: boolean
        onDoneWork: boolean
        onHome: boolean
    }
    logining: () => void
    isLogin: boolean
    usersArray: any
    tasksArray: any
    modelsArray: any
    doneWorksArray: any
}

const Main = ({
    menuShow,
    logining,
    isLogin,
    usersArray,
    tasksArray,
    modelsArray,
    doneWorksArray,
}: Props) => {
    console.log(isLogin)
    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    padding: '50px, 0',
                }}
            >
                {isLogin ? null : <Login logining={logining} />}
                {menuShow.onHome ? <Home /> : null}
                {menuShow.onDoneWork ? (
                    <DoneWork doneWorksArray={doneWorksArray} />
                ) : null}
                {menuShow.onModels ? (
                    <Models modelsArray={modelsArray} />
                ) : null}
                {menuShow.onTasks ? <Tasks tasksArray={tasksArray} /> : null}
                {menuShow.onUsers ? <Users usersArray={usersArray} /> : null}
            </Container>
        </>
    )
}

export default Main
