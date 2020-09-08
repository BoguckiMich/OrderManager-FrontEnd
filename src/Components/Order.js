import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card'
import axios from "axios";
import "./Order.css"
import {Button, CardActionArea, CardActions, CardContent} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const Order = ({fetchURL}) => {
    const [orders, setOrders] = useState([]);
    const [couriers, setCouriers] = useState([])
    const [status, setStatus] = React.useState('');
    const [orderValue, setOrderValue] = React.useState('')

    const fetchData = async () => {
        const request = await axios("http://localhost:8080/order", {auth: {username: "michalek", password: "qwe123"}})
        console.log(request.data)
        setOrders(request.data)
    }

    // const fetchData = async () => {
    //     const request = await fetch("http://localhost:8080/order", { headers: new Headers({
    //             'Authorization': 'Basic '+btoa('michalek:qwe123')})}).then(response=>response.json())
    //     console.log(request.data)
    //     setOrders(request.data)
    // }

    const fetchCourierData = async () => {
        const request = await axios("http://localhost:8080/user" ,   {auth: {username: "michalek", password: "qwe123"}, method: "GET"});
        console.log(request.data)
        setCouriers(request.data)
    }

    useEffect(() => {
        fetchData();
        fetchCourierData();
    }, [])


    const handleDelete = (e, o) => {
        console.log(o.id)
        const deleteOrder = () => {
            axios.delete(`http://localhost:8080/order/${o.id}`)
            setOrders(orders.filter((element) => element.id !== o.id));
        }
        deleteOrder();
    }

    const handleAddCourier = (e, courier, order) => {
        console.log(courier)
        const addCourier = () => {
            axios.patch(`http://localhost:8080/order/${order.id}`, courier).catch(err => console.log(err.response.data)).then(fetchData);
        }
        addCourier()
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleInputChange = e => {
        setOrderValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(status)
        console.log(orderValue)
        const addOrder = () => {
            axios.post("http://localhost:8080/order/create", {
                name: orderValue,
                orderStatus: status
            }).then(() => fetchData())
        }
        addOrder();
    }

    return (
        <div className="orders">
            <TableContainer>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Name</TableCell>
                            <TableCell align="right">Order Status</TableCell>
                            <TableCell align="right">Courier</TableCell>
                            <TableCell align="right">Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((o) => (
                            <TableRow key={o.id}>
                                <TableCell component="th" >
                                    {o.name}
                                </TableCell>
                                <TableCell align="right">{o.orderStatus}</TableCell>
                                <TableCell align="right">
                                    {o.userDto === null ? <div>
                                                    <p>choose courier:</p>
                                                    <Select
                                                        value=""
                                                        onChange={handleChangeStatus}
                                                    >
                                                        {couriers.map(c => <MenuItem value={c}
                                                                                     onClick={(e) => handleAddCourier(e, c, o)}>{c.firstName}</MenuItem>)}
                                                    </Select>
                                        </div> : o.userDto.firstName}
                                </TableCell>
                                <TableCell align="right"><Button size="small" color="secondary" onClick={(e) => handleDelete(e, o)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button className="orderButton" size="large" color="primary" href="/clients/create">Create new order</Button>
        </div>
    );
};

export default Order;