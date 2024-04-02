import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Menu from 'component/Menu/Menu'
import { Button } from '@mui/material'

type Props = {
    showMenuItem: (
        users: any,
        tasks: any,
        models: any,
        doneWork: any,
        home: any
    ) => void
    getUsers: () => void
    getTasks: () => void
    getModels: () => void
    getDoneWork: () => void
    isLogin: boolean
}
const Header = ({
    showMenuItem,
    getUsers,
    getTasks,
    getModels,
    getDoneWork,
    isLogin,
}: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Menu
                        showMenuItem={showMenuItem}
                        isLogin={isLogin}
                        getUsers={getUsers}
                        getTasks={getTasks}
                        getModels={getModels}
                        getDoneWork={getDoneWork}
                    />
                    <Button>Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
