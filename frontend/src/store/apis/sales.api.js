import {RootApi} from "./Root.api.js";

export const salesAllGetApi = async () => {
    try{
        const response = await RootApi.get("/sales")
        return response.data
    }
    catch(error){
        return error
    }
}


export const salesGetApi = async (id) => {
    try{
        const response = await RootApi.get(`/sales/${id}`)
        return response.data
    }
    catch(error){
        return error
    }
}

export const salesPostApi = async (dataObj) => {
    try{
        const response = await RootApi.post("/sales",dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const salesPutApi = async (dataObj) => {
    try{
        const response = await RootApi.put(`/sales/${dataObj.id}`,dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const salesDeleteApi = async (id) => {
    try{
        await RootApi.delete(`/sales/${id}`)
        return id
    }
    catch(error){
        return error
        //sdsdfsdf
    }
}