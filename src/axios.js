import axios from "axios"

const instance = axios.create({
    auth: {
        username: "michalek",
        password: "qwe123"
    }
})

export default instance;