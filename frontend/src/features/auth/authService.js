import axios from 'axios'

const API_URL = '/api/users/'

const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)
  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const login = async (userData) => {
  const {data} = await axios.post(API_URL + 'login', userData)
  if(data) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  return data
}

const logout = async () => {
  localStorage.removeItem('user')
}



const authService = {
    register,
    login,
    logout,
}

export default authService;