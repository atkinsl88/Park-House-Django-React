import axios from 'axios'

const baseUrl = 'https://localhost:8000'

export const newEnquiry = formData => {
  return axios.post(`${baseUrl}/enquiries`, formData)
}