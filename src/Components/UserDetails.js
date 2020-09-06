import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const UserDetails = ({user}) => {
    return (
        <div>
            <p>Nazwisko : {user.lastName}</p>
            <p>Nr telefonu: {user.phone}</p>
            <TableContainer>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Name</TableCell>
                            <TableCell align="right">Order Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.orders.map((o) => (
                                    <TableRow key={o.id}>
                                        <TableCell component="th">
                                            {o.name}
                                        </TableCell>
                                        <TableCell align="right">{o.orderStatus}</TableCell>
                                    </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserDetails;