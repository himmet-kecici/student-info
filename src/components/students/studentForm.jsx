import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../layout/input'
const StudentForm = () => {
    const { id } = useParams()
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: '',
        standard: '',
        address1: '',
        address2: ''

    })
    const { name, email, phone, standard, address1, address2 } = student

    const onInputChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })

    }

    const submitForm = e => {
        e.preventDefault();
        if (id) {
            alert('saddsaf')
        } else {
            alert('s;f')
        }
    }

    return (

        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form onSubmit={submitForm}>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Name"
                                            name="name"
                                            value={name}
                                            onChange={onInputChange}
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            placeholder="Enter Student E-mail"
                                            name="email"
                                            value={email}
                                            onChange={onInputChange}
                                        />

                                    </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <Input
                                            type="number"
                                            placeholder="Enter Student Phone"
                                            name="phone"
                                            value={phone}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Class"
                                            name="standard"
                                            value={standard}
                                            onChange={onInputChange}
                                        />

                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Address Line 1"
                                            name="address1"
                                            value={address1}
                                            onChange={onInputChange}
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Line 2"
                                            name="address2"
                                            value={address2}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-general">
                                    {
                                        id ? 'update student' : 'add student'
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm