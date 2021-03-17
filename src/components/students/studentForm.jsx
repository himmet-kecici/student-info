import React from 'react'
import { useParams } from 'react-router-dom'
const StudentForm = () => {
    const { id } = useParams()
    return (

        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Name"
                                            name="name"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Enter Student E-mail"
                                            name="email"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Phone"
                                            name="phone"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Class"
                                            name="standard"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Address Line 1"
                                            name="address1"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Line 2"
                                            name="address2"
                                            value=""
                                            className="form-control"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
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