import axios from "axios";

export default axios.create({
baseURL: "https://api.unsplash.com",
headers: {
    Authorization: "Client-ID dWinamjpdI5g6vCbjedwM3VZgWjmsMhvL8dISZEkuL4"
    }
});