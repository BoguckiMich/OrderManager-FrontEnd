import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card'
import axios from "axios";
import "./Order.css"
import {Button, CardActionArea, CardActions, CardContent, FormControl} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Order = ({fetchURL}) => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = React.useState('');
    const [orderValue, setOrderValue] =React.useState('')

    const fetchData = async () => {
        const request = await axios(fetchURL);
        console.log(request.data)
        setOrders(request.data)
        // console.log(orders)
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handleDelete = (e, o) => {
        console.log(o.id)
        const deleteOrder = () => {
            axios(`http://localhost:8080/order/remove/${o.id}`)
            setOrders(orders.filter((element) => element.id !== o.id));
        }
        deleteOrder();
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
            axios.post("http://localhost:8080/order/create", {name: orderValue, orderStatus: status})
            fetchData();
        }
        addOrder();
    }

    return (
        <div className="orders">
            {orders.map(o => <Card className="order__single" key={o.id}> <CardActionArea>
                <CardContent><h1>{o.name}</h1>
                    <p>Status <span>{o.orderStatus}</span></p></CardContent>
            </CardActionArea> <CardActions>
                <Button size="small">Details</Button>
                <Button size="small" color="secondary" onClick={(e) => handleDelete(e, o)}>Delete</Button>
            </CardActions></Card>)}

            <Card>
                    <CardContent>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                                <Input placeholder="Name of order" type="text" value={orderValue} onChange={handleInputChange}/>
                                <hr/>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    onChange={handleChangeStatus}
                                >
                                    <MenuItem value={"DELIVERED"}>Delivered</MenuItem>
                                    <MenuItem value={"WAITING"}>Waiting</MenuItem>
                                    <MenuItem value={"ONTHEWAY"}>On the Way</MenuItem>
                                    <MenuItem value={"RECEIVED"}>Received</MenuItem>
                                    <MenuItem value={"PREPARED"}>Prepared</MenuItem>
                                </Select>
                            <Button type="submit" size="small" color="primary">Add</Button>
                        </form>
                    </CardContent>
            </Card>
        </div>
    );
};

export default Order;