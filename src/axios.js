import axios from "axios"

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/e-comm-site-jozebel/us-central1/api' // THE API (cloud function) URL
})

export default instance