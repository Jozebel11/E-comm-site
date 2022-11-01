import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-e-comm-site-jozebel.cloudfunctions.net/api"
    
    // 'http://localhost:5001/e-comm-site-jozebel/us-central1/api'
     // THE API (cloud function) URL
});

export default instance;