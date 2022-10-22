import axios from 'axios'

const API_URL = 'api/ideas'

//create idea
const createIdea = async (idea, token) => {
 const response = await axios.post(API_URL, idea)
 if(response.data) {
    localStorage.setItem('idea', JSON.stringify(response.data))
 }

 return response.data
}


//get idea
const getIdea = async (token) => {
    const response = await axios.get(token)
    if(response.data) {
        localStorage.setItem('idea', JSON.stringify(response.data))
    }

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