// src/components/Button/DeleteButton.tsx
import { Tooltip } from "@mui/material"
import React from "react"
import { DeleteButtonProps, DeleteButton as RaDeleteButton } from "react-admin"

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <Tooltip title="Delete">
      <span>
        <RaDeleteButton {...props} />
      </span>
    </Tooltip>
  )
}

export default DeleteButton
