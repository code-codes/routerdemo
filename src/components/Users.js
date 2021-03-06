import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'


function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="text-center">
            <p className="display-2 text-primary">Users</p>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((userObj) => <tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.username}</td>
                            <td>{userObj.website}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;