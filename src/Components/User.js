import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserDetails from "./UserDetails"
import Paper from "@material-ui/core/Paper";
import "./User.css"
import {Button} from "@material-ui/core";

const User = ({fetchURL}) => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('')
    const [userDetails, setUserDetails] = useState(false)

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
        <div className="userContainer">
            {users.map((user)=><Paper className="user" key={user.id}>
                <p hidden>{user.id}</p>
                <h1>{user.firstName}</h1>
                <Button size="small" color="secondary" onClick={()=>{setUserDetails(!userDetails); setUserId(user.id)}}>
                    Details
                </Button>
                {userDetails ? <UserDetails user={user} /> : null}
            </Paper>)}
        </div>
    );
};

export default User;