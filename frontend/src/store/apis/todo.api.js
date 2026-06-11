import {RootApi} from "./Root.api.js";

export const todoAllGetApi = async () => {
    try{
        const response = await RootApi.get("/todos")
        return response.data
    }
    catch(error){
        return error
    }
}

export const todoGetApi = async (id) => {
    try{
        const response = await RootApi.get(`/todos/${id}`)
        return response.data
    }
    catch(error){
        return error
    }
}

export const todoPostApi = async (dataObj) => {
    try{
        const response = await RootApi.post("/todos", dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const todoPutApi = async (dataObj) => {
    try{
        const response = await RootApi.put(`/todos/${dataObj.id}`, dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const todoDeleteApi = async (id) => {
    try{
        await RootApi.delete(`/todos/${id}`)
        return id
    }
    catch(error){
        return error
    }
}