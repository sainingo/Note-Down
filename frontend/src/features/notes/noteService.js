import axios from 'axios'

const API_URL = 'api/ideas'

//create idea
const createIdea = async (idea, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
 const response = await axios.post(API_URL, idea, config)
 return response.data
}


//get idea
const getIdea = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data

}

//delete Idea

const deleteIdea = async () => {

}

const noteService = {
    createIdea,
    getIdea,
    deleteIdea
}

export default noteService