import axios from "axios"

const instance = axios.create({
    auth: {
        username: "michalek",
        password: "qwe123"
    },
    cors: {
        origin: true,
        credentials: true
    }
})

export default instance;