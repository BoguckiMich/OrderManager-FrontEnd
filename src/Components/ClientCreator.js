import * as React from 'react';
import axios from "axios";
import {useState} from "react";

const ClientCreator = () => {

    const [clients, setClients] = useState([])

    const fetchData = async () => {
        const request = await axios("http://localhost:8080/client", {auth: {username: "michalek", password: "qwe123"}})
        console.log(request.data)
        setClients(request.data)
    }

    return (
        <div>

        </div>
    );
};

export default ClientCreator;