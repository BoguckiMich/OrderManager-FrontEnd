import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import Paper from "@material-ui/core/Paper";
import "./User.css";
import { Button } from "@material-ui/core";
import * as actions from "./store/actions";
import { connect } from "react-redux";

const User = ({ users, onUsersFetch }) => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(false);

  const fetchData = async () => {
    const request = await axios.get("http://localhost:8080/user", {
      auth: { username: "michalek", password: "qwe123" },
      method: "GET",
    });
    console.log(request.data);
    onUsersFetch(request.data);
    // console.log(orders)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="userContainer">
      {users.map((user) => (
        <Paper className="user" key={user.id}>
          <p hidden>{user.id}</p>
          <h1>{user.firstName}</h1>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              setUserDetails(!userDetails);
              setUserId(user.id);
            }}
          >
            Details
          </Button>
          {userDetails ? <UserDetails user={user} /> : null}
        </Paper>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.reducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUsersFetch: (users) =>
      dispatch({ type: actions.USERS_FETCHED, users: users }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
