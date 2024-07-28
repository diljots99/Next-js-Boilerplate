// Data and Auth
// import axios from "axios"
import drfProvider, { fetchJsonWithAuthToken, tokenAuthProvider } from "ra-data-django-rest-framework"

// Define types for resource and params
type Resource = string
type Params = any // Adjust this type based on actual parameters used

// const BASE_URL = process.env.API_BASE_URL || "http://localhost:8000"
const BASE_URL = process.env.API_BASE_URL || "https://erp-backend-nine.vercel.app"
const AUTH_URL = BASE_URL + "/auth-token/"

export const authProvider = tokenAuthProvider({
  obtainAuthTokenUrl: AUTH_URL,
})

export const dataProvider = drfProvider(`${BASE_URL}/api`, fetchJsonWithAuthToken)

const client = {
  getList: (resource: Resource, params: Params) => {
    return dataProvider.getList(resource, params)
  },
  getOne: (resource: Resource, params: Params) => {
    return dataProvider.getOne(resource, params)
  },
  getMany: (resource: Resource, params: Params) => {
    return dataProvider.getMany(resource, params)
  },
  getManyReference: (resource: Resource, params: Params) => {
    return dataProvider.getManyReference(resource, params)
  },
  create: (resource: Resource, params: Params) => {
    return dataProvider.create(resource, params)
  },
  update: (resource: Resource, params: Params) => {
    return dataProvider.update(resource, params)
  },
  updateMany: (resource: Resource, params: Params) => {
    return dataProvider.updateMany(resource, params)
  },
  delete: (resource: Resource, params: Params) => {
    return dataProvider.delete(resource, params)
  },
  deleteMany: (resource: Resource, params: Params) => {
    return dataProvider.deleteMany(resource, params)
  },
  inviteUser: async (data: { email: string }) => {
    try {
      const res = await fetchJsonWithAuthToken(`${BASE_URL}/api/users/invite_user/`, {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json', // Ensure content type is specified
        // },
        body: JSON.stringify(data),
      })
      console.log("inviteUser", res)
      return res.json
    } catch (err) {
      console.error(err)
      throw err // Re-throw the error if needed
    }
  },
  monitorCompany: async (companyID: string) => {
    try {
      const res = await fetchJsonWithAuthToken(`${BASE_URL}/api/company-offical/${companyID}/monitor/`, {
        method: "GET",
      })
      return res.json()
    } catch (err) {
      console.error(err)
      throw err // Re-throw the error if needed
    }
  },
  unMonitorCompany: async (companyID: string) => {
    try {
      const res = await fetchJsonWithAuthToken(`${BASE_URL}/api/company-offical/${companyID}/unmonitor/`, {
        method: "GET",
      })
      return res.json()
    } catch (err) {
      console.error(err)
      throw err // Re-throw the error if needed
    }
  },
}

export default client
