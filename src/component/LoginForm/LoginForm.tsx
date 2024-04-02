import { Card, CardContent } from '@mui/material'
import './LoginForm.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/firestore'
import { useState } from 'react'

type Props = {
    logining: () => void
}

const LoginForm = ({ logining }: Props) => {
    const firebaseConfig = {
        apiKey: 'AIzaSyAUMB9CZWhfaglmVcsHbMfvvLc8cSizf0M',
        authDomain: 'tek1la-test-project.firebaseapp.com',
        projectId: 'tek1la-test-project',
        storageBucket: 'tek1la-test-project.appspot.com',
        messagingSenderId: '945948088830',
        appId: '1:945948088830:web:30db819fad2396626b88af',
    }

    firebase.initializeApp(firebaseConfig)

    const auth = firebase.auth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<any>(null)

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            console.log('Login successful!')
            logining()
        } catch (error) {
            setError(error)
        }
    }
    return (
        <Card className="login-form-wraper" variant="outlined">
            <CardContent className="login-form">
                <div className="login-block">
                    <form onSubmit={handleLogin}>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button type="submit">Login</button>
                        {error && (
                            <div style={{ color: 'red' }}>{error}</div>
                        )}{' '}
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginForm
