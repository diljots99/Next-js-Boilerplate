import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { FC, useState } from "react"
import InviteUserForm from "@/components/InviteUserForm/InviteUserForm" // Adjust the import path accordingly

const InviteUserButton: FC = (props: any) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleClickOpen} startIcon={<PersonAddIcon />} {...props}>
        Invite User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite User</DialogTitle>
        <DialogContent>
          <InviteUserForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InviteUserButton
