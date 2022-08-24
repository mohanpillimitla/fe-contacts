const BASE_URL = "http://localhost:8000"



export const loginApi = async (data) => {
    const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return [await response.json(), response.status < 204 ? true : false]
}

export const uploadFile = async (file,token) => {
    const formData = new FormData()
    formData.append('file_uploaded',file)
    const response = await fetch(`${BASE_URL}/files/upload/`, {
        method: "POST",
        headers: {
             Authorization:`Token ${token}`
        },
        body: formData
    })
    return [await response.json(), response.status < 204 ? true : false]
}


export const getPosts = async (token) => {
    const response = await fetch(`${BASE_URL}/files/upload/`, {
        method: 'GET',
       
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Token ${token}`
        },

    })
    return [await response.json(), response.status < 204 ? true : false]
}