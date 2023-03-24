import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "./Login.scss"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className='body-login'>
            <div className='body-login-left'>
                <img src='./farm.jpg' />
            </div>
            <div className='body-login-right'>
                <h2>Welcome To Strawberry farm</h2>
        
                <form className="login" onSubmit={handleSubmit}>
                    <h3>Log In</h3>

                    <label>Email address:</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button disabled={isLoading}>Log in</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default Login