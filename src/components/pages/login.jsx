import React, { useState } from 'react'
import Input from '../layout/input'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
const Login = () => {
    let history = useHistory()
    const firebase = useFirebase()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const submitForm = async e => {
        e.preventDefault()
        await firebase.login(user)
        history.replace("/")
    }
    return (

        <div className="container">
            <div className="py-5">
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2>Student Info</h2>
                                <form onSubmit={submitForm}>
                                    <div className="form-group">
                                        <Input
                                            name="email"
                                            placeholder="Enter Your E-mail"
                                            value={user.email}
                                            onChange={onInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="Enter Your Password"
                                            value={user.password}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <button className="btn  btn-block btn-general">
                                        Login to dashboard
            </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;