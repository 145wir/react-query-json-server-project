import {RootApi} from "./Root.api.js";


export const employeeAllGetApi = async () => {
    try{
        const response = await RootApi.get("http://localhost:3001/employees")
        return response.data
    }
    catch(error){
        return error
    }
}


export const employeeGetApi = async (id) => {
    try{
        const response = await RootApi.get(`/employees/${id}`)
        return response.data
    }
    catch(error){
        return error
    }
}

export const employeePostApi = async (dataObj) => {
    try{
        const response = await RootApi.post("/employees",dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const employeePutApi = async (dataObj) => {
    try{
        const response = await RootApi.put(`/employees/${dataObj.id}`,dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const employeeDeleteApi = async (id) => {
    try{
        await RootApi.delete(`/employees/${id}`)
        return id
    }
    catch(error){
        return error
        //sdsdfsdf
    }
}