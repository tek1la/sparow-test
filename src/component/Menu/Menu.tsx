import { Container, Tab, Tabs } from '@mui/material'
import React from 'react'

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
const Menu = ({
    showMenuItem,
    getUsers,
    getTasks,
    getModels,
    getDoneWork,
    isLogin,
}: Props) => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    const showingUsers = () => {
        showMenuItem(true, false, false, false, false)
        getUsers()
    }
    const showingTasks = () => {
        showMenuItem(false, true, false, false, false)
        getTasks()
    }
    const showingModels = () => {
        showMenuItem(false, false, true, false, false)
        getModels()
    }
    const showingDoneWork = () => {
        showMenuItem(false, false, false, true, false)
        getDoneWork()
    }
    const showingHome = () => {
        showMenuItem(false, false, false, false, true)
    }
    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile={true}
                >
                    <Tab
                        disabled={isLogin ? false : true}
                        label="Home"
                        onClick={showingHome}
                    />
                    <Tab
                        disabled={isLogin ? false : true}
                        label="Done work"
                        onClick={showingDoneWork}
                    />
                    <Tab
                        disabled={isLogin ? false : true}
                        label="Models"
                        onClick={showingModels}
                    />
                    <Tab
                        disabled={isLogin ? false : true}
                        label="Tasks"
                        onClick={showingTasks}
                    />
                    <Tab
                        disabled={isLogin ? false : true}
                        label="Users"
                        onClick={showingUsers}
                    />
                </Tabs>
            </Container>
        </>
    )
}
export default Menu
