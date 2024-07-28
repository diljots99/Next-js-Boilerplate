// src/components/Button/ResendInviteButton.tsx
import { Refresh } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { useDataProvider, useNotify } from 'react-admin';

interface ResendInviteButtonProps {
  record: any; // Type this according to your record structure
}

const ResendInviteButton: React.FC<ResendInviteButtonProps> = ({ record }) => {
  const notify = useNotify();
  const dataProvider = useDataProvider();
  const handleResendInvite = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation(); // Prevents the default row action
    try {
      await dataProvider.inviteUser({ email: record.email }); // Adjust the data structure if needed
      notify('Invitation resent successfully');
    } catch (error) {
      notify('Error resending invitation', { type: 'error' });
    }
  };

  return (
    <Tooltip title="Resend Invite">
      <span>
        <IconButton onClick={handleResendInvite} color="primary">
          <Refresh />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ResendInviteButton;
