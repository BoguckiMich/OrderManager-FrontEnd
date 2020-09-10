import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";

const ClientCreator = () => {

    const [clients, setClients] = useState([])

    const fetchData = async () => {
        const request = await axios("http://localhost:8080/clients", {auth: {username: "michalek", password: "qwe123"}})
        console.log(request.data)
        setClients(request.data)
    }


    return (
        <div>
            {clients.map(c=>(
                <div key={c.id}>
                    Imie klienta:
                    {c.firstName}
                </div>
            ))}
        </div>
    );
};

export default ClientCreator;