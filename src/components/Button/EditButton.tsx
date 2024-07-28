// src/components/Button/EditButton.tsx
import { Tooltip } from '@mui/material';
import React from 'react';
import type { EditButtonProps } from 'react-admin';
import { EditButton as RaEditButton } from 'react-admin';

const EditButton: React.FC<EditButtonProps> = (props) => {
  return (
    <Tooltip title="Edit">
      <span>
        <RaEditButton {...props} />
      </span>
    </Tooltip>
  );
};

export default EditButton;
