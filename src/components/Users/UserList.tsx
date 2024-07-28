import { FC } from "react"
import {
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  ExportButton,
  FunctionField,
  List,
  ListProps,
  Pagination,
  TextField,
  TopToolbar,
} from "react-admin"
import DeleteButton from "@/components/Button/DeleteButton"
// import DeleteButtonConfirmation from "@/components/Button/DeleteButtonConfirmation"
import EditButton from "@/components/Button/EditButton"
import InviteUserButton from "@/components/Button/InviteUserButton"
import ResendInviteButton from "@/components/Button/ResendInviteButton"
// Define the props type for the UserList component
type UserListProps = {
  // Define any additional props your component might require here
}

const ListActions: FC = (props) => (
  <TopToolbar>
    <ExportButton {...props} />
    <InviteUserButton {...props} />
  </TopToolbar>
)

const UserList: FC<UserListProps> = (props) => (
  <List {...props} actions={<ListActions />} pagination={<Pagination />}>
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Name" />
      <EmailField source="email" label="Email" />
      <TextField source="status" label="Status" />
      <DateField source="date_joined" label="Date Joined" />
      <DateField source="last_login" label="Last Login" />
      <BooleanField source="is_staff" label="Is Staff" />
      <BooleanField source="is_active" label="Is Active" />
      <FunctionField
        label="Actions"
        render={(record: any) => {
          return <>{record.status === "Invited" ? <ResendInviteButton record={record} /> : null}</>
        }}
      />
      <EditButton label="" />

      <DeleteButton mutationMode="pessimistic" label="" />
    </Datagrid>
  </List>
)

export default UserList
