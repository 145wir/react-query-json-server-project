import {RootApi} from "./Root.api.js";


export const productAllGetApi = async () => {
    try{
        const response = await RootApi.get("/product")
        return response.data
    }
    catch(error){
        return error
    }
}


export const productGetApi = async (id) => {
    try{
        const response = await RootApi.get(`/product/${id}`)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productPostApi = async (dataObj) => {
    try{
        const response = await RootApi.post("/product",dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productPutApi = async (dataObj) => {
    try{
        const response = await RootApi.put(`/product/${dataObj.id}`,dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productDeleteApi = async (id) => {
    try{
        await RootApi.delete(`/product/${id}`)
        return id
    }
    catch(error){
        return error
        //sdsdfsdf
    }
}