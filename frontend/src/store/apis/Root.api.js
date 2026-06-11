import axios from "axios";

export const RootApi = axios.create({
    baseURL: "/api"
})

