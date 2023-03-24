import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import FileBase from 'react-file-base64';
import { useNavigate } from "react-router";
import "./Login.scss"

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState();

    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className='body-login'>
            <div className='body-login-left'>
                <img src='./farm.jpg' />
            </div>
            <div className='body-login-right'>
                <h2>Welcome To Strawberry farm</h2>

                <form className="signup" onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

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
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ e }) => setAvatar(e)}
                    />
                    <button disabled={isLoading} className="btn-signup">Sign up</button>
                    <button  className="btn-signup" onClick={()=>navigate("/login")}>go to login</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default Signup