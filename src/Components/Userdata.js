import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Userdata() {

    const [userdata, setUserdata] = useState([]);

    useEffect(() => {
        const getUserdata = async () => {
            const reqData = await fetch("http://localhost:5000/api/user");
            const resData = await reqData.json();
            setUserdata(resData);
        }
        getUserdata();
    }, []);

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col'>
                        <h4>User data</h4>
                        <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                            <Link to="/adduser" className='btn btn-warning'>Add New User</Link>
                        </div>
                        <table class="table table-bordered table-hover mt-4">
                            <thead>
                                <tr>
                                    <th>S. No.</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { userdata.map((userdata, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ userdata.username }</td>
                                        <td>{ userdata.email }</td>
                                        <td>{ userdata.phone }</td>
                                        <td>{ userdata.address }</td>
                                        <td>{ userdata.status===1?"Active":"Inactive" }</td>
                                        <td>
                                            <Link to="/editUser" className="btn btn-primary mx-1">Edit</Link>
                                            <Link to="/deleteUser" className="btn btn-danger mx-1">Delete</Link>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;