import axios from 'axios'
const baseUrl = '/api'

export const newEnquiry = formData => {
  return axios.post(`${baseUrl}/enquiries/`, formData)
}

export const getAllImages = () => {
  return axios.get(`${baseUrl}/images`)
}

export const getAllJobs = () => {
  return axios.get(`${baseUrl}/jobs`)
}