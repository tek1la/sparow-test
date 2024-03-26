import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Container from '@mui/material/Container'

const firebaseConfig = {
    apiKey: 'AIzaSyBkw0FlA9uRHZBSiRUYuadtqeEOKGPR0A4',
    authDomain: 'app-manufacture-2e4b2.firebaseapp.com',
    projectId: 'app-manufacture-2e4b2',
    storageBucket: 'app-manufacture-2e4b2.appspot.com',
    messagingSenderId: '933521770665',
    appId: '1:933521770665:web:511068add9f50c4c93c1b8',
    measurementId: 'G-LGTHCLNHFK',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

function getUsers() {
    db.collection('users')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data())
            })
        })
        .catch((error) => {
            console.log('Error getting documents: ', error)
        })
}
const Main = () => {
    return (
        <>
            <Container maxWidth="sm">
                <h1>Hello world</h1>
                <button onClick={getUsers}>Get users</button>
            </Container>
        </>
    )
}

export default Main
