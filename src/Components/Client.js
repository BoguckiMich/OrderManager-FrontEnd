import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";

const ClientCreator = () => {

    const [clients, setClients] = useState([])

    const fetchClient = async () => {
        const request = await axios("http://localhost:8080/clients", {auth: {username: "michalek", password: "qwe123"}})
        console.log(request.data)
        setClients(request.data)
    }

    useEffect(()=>{
        fetchClient().catch(e=>console.log(e));
    },[])

    return (
        <div>
            {clients.map(c=>(
                <div>
                    Imie klienta:
                    {c.firstName}
                </div>
            ))}
        </div>
    );
};

export default ClientCreator;