import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserDetails from "./UserDetails"

const User = ({fetchURL}) => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('')

    const fetchData = async () => {
        const request = await axios("http://localhost:8080/user");
        console.log(request.data)
        setUsers(request.data)
        // console.log(orders)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            {users.map((user)=><div key={user.id}>
                <p hidden>{user.id}</p>
                <h1 onClick={()=>setUserId(user.id)}>{user.firstName}</h1>
                {userId? <UserDetails userId={user.id} /> : null}
            </div>)}
        </div>
    );
};

export default User;