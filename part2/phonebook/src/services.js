import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    return axios.get(baseUrl)
}
const createPersons = newObject => {
  console.log(newObject,"<<create")
  return axios.post(baseUrl, newObject)
}

const updatePersons = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePersons = (id, newObject) => {
  return axios.delete(`${baseUrl}/${id}`, newObject)
}

export default {
  getPersons: getPersons,
  createPersons: createPersons,
    updatePersons: updatePersons,
  deletePersons: deletePersons
}