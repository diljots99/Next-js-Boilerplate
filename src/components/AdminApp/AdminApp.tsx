// in src/components/AdminApp.tsx
"use client" // remove this line if you choose Pages Router
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from "react-admin"
import UserList from "@/components/Users/UserList"
import dataProvider, { authProvider } from "@/utils/dataProvider"

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} show={ShowGuesser} />
  </Admin>
)

export default AdminApp
