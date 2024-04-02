// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import { collection, getDocs } from 'firebase/firestore'

type Props = {}
const Home = (props: Props) => {
    // const firebaseConfig = {
    //     apiKey: 'AIzaSyAUMB9CZWhfaglmVcsHbMfvvLc8cSizf0M',
    //     authDomain: 'tek1la-test-project.firebaseapp.com',
    //     projectId: 'tek1la-test-project',
    //     storageBucket: 'tek1la-test-project.appspot.com',
    //     messagingSenderId: '945948088830',
    //     appId: '1:945948088830:web:30db819fad2396626b88af',
    // }

    // firebase.initializeApp(firebaseConfig)

    // const db = firebase.firestore()

    // const getData = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, 'users'))
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`)
    //         })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    return <div>Home</div>
}
export default Home

// import { Button, Grid } from '@mui/material'
// import TasksListItem from './TasksListItem'
// import { useEffect, useState } from 'react'

// type Props = {
// }

// const TasksList = (props: Props) => {
//     const [tasksArray, setTasksArray] = useState([])
//     const getTasks = async () => {
//         try {
//             const snapshot = await db.collection('tasks_path').get()
//             const newTasksArray: any = snapshot.docs.map((doc) => doc.data())
//             setTasksArray(newTasksArray)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     return (
//         <>
//             <Grid
//                 container
//                 spacing={4}
//                 sx={{
//                     margin: '30px 0',
//                 }}
//             >
//                 <Button onClick={getTasks}></Button>
//                 {tasksArray.map(() => (
//                     <Grid item xs={12} sm={6} md={4} key={}>
//                         <TasksListItem index={} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     )
// }
// export default TasksList
