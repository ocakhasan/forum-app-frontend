import axios from 'axios'

const baseUrl = '/api/entries'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log("response", response)
    return response.data
}

const create = async (newObject) => {

    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (newObject, id) => {
    await axios.put(`${baseUrl}/${id}`, newObject)
}

const entryService = {
    getAll,
    create,
    update,
    setToken
}

export default entryService