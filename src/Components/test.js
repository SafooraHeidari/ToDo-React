import {useEffect, useState} from "react";

export default function Test() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.users)
            })
    }, [])

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}