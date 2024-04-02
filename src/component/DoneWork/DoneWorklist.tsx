// import { Button, Grid } from '@mui/material'
// import DoneWorkListItem from './DoneWorkListItem'
// import { useState } from 'react'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import { doc, getDoc } from 'firebase/firestore'

// type Props = {
//     doneWorksArray: any[]
// }
// type Subcollection = {
//     id: any
//     name: string
// }
// type DoneWorkArrayType = {
//     date: string
//     id: string
//     modelName: string
//     qrId: string
//     taskName: string
//     workOrder: string
//     workerName: string
// }
// const DoneWorkList = ({ doneWorksArray }: Props) => {
//     const [doneWorkArray, setDoneWorkArray] = useState<DoneWorkArrayType[]>([])
//     const [subcollections, setSubcollections] = useState<Subcollection[]>([])
//     const firebaseConfig = {
//         apiKey: 'AIzaSyAUMB9CZWhfaglmVcsHbMfvvLc8cSizf0M',
//         authDomain: 'tek1la-test-project.firebaseapp.com',
//         projectId: 'tek1la-test-project',
//         storageBucket: 'tek1la-test-project.appspot.com',
//         messagingSenderId: '945948088830',
//         appId: '1:945948088830:web:30db819fad2396626b88af',
//     }

//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig)
//     }

//     const db = firebase.firestore()

//     const getData = async () => {
//         const docRef = doc(db, 'done_work_path', '1.6')
//         const docSnap = await getDoc(docRef)

//         if (docSnap.exists()) {
//             console.log('Document data:', docSnap.data())
//         } else {
//             // docSnap.data() will be undefined in this case
//             console.log('No such document!')
//         }
//     }

//     const getSubcollections = async (parentCollection: string) => {
//         try {
//             const snapshot = await db.collection(parentCollection).get()
//             const subcollections: Subcollection[] = []
//             snapshot.docs.forEach((doc) => {
//                 const subcollectionRef = doc.ref.collection(doc.id)
//                 subcollections.push({
//                     id: doc.data(),
//                     name: doc.id,
//                     ...doc.data(),
//                 })
//             })
//             setSubcollections(subcollections)
//             console.log(subcollections)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const getDoneWork = async (subcollectionId: string) => {
//         try {
//             const snapshot = await db
//                 .collection(`done_work_path/${subcollectionId}`)
//                 .get()
//             const newDoneWorkArray: DoneWorkArrayType[] = snapshot.docs.map(
//                 (doc) => doc.data() as DoneWorkArrayType
//             )

//             setDoneWorkArray(newDoneWorkArray)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     console.log(doneWorkArray)
//     return (
//         <>
//             <Grid
//                 container
//                 spacing={4}
//                 sx={{
//                     margin: '30px 0',
//                 }}
//             >
//                 <Grid>
//                     {/* {doneWorksArray.map((task) => (
//                         <Grid item key={task.docId}>
//                             <Button onClick={() => getDoneWork()}>
//                                 {task.docId}
//                             </Button>
//                         </Grid>
//                     ))} */}
//                     {doneWorksArray.map((task) => (
//                         <Grid item key={task.docId}>
//                             <Button
//                                 // onClick={() =>
//                                 //     getSubcollections(`done_work_path`)
//                                 // }
//                                 onClick={getData}
//                             >
//                                 {task.docId}
//                             </Button>
//                         </Grid>
//                     ))}
//                 </Grid>
//                 <Grid>
//                     {subcollections.map((subcollection) => (
//                         <Grid item key={subcollection.id}>
//                             <Button
//                                 onClick={() => getDoneWork(subcollection.id)}
//                             >
//                                 {subcollection.name}
//                             </Button>
//                         </Grid>
//                     ))}
//                 </Grid>
//                 {doneWorkArray.map(
//                     ({
//                         date,
//                         id,
//                         modelName,
//                         qrId,
//                         taskName,
//                         workOrder,
//                         workerName,
//                     }) => (
//                         <Grid item xs={12} sm={6} md={4} key={id}>
//                             <DoneWorkListItem
//                                 date={date}
//                                 id={date}
//                                 modelName={date}
//                                 qrId={date}
//                                 taskName={date}
//                                 workOrder={date}
//                                 workerName={date}
//                             />
//                         </Grid>
//                     )
//                 )}
//             </Grid>
//         </>
//     )
// }
// export default DoneWorkList
type Props = {
    doneWorksArray: any
}
const DoneWorklist = (props: Props) => {
    return <div>DoneWorklist</div>
}
export default DoneWorklist
