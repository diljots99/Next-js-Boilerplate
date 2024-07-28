import type { FC } from 'react';
import React from 'react';
import {
  SaveButton,
  SimpleForm,
  TextInput,
  useDataProvider,
  useNotify,
  useRefresh,
} from 'react-admin';
import { useMutation } from 'react-query';

interface InviteUserFormProps {
  onClose: () => void;
}

// const postDefaultValue = () => ({ reated_at: new Date() })

const InviteUserForm: FC<InviteUserFormProps> = ({ onClose }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider();

  const mutation = useMutation({
    mutationFn: (data: any) => dataProvider.inviteUser(data),
    onSuccess: () => {
      notify('User invited successfully');
      refresh();
      onClose();
    },
    onError: (error: any) => {
      notify(`Error: ${error.message}`, { type: 'error' });
    },
  });

  const handleSave = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <SimpleForm
      onSubmit={handleSave}
      toolbar={false}
      // toolbar={<Toolbar />}
      sanitizeEmptyValues
    >
      <TextInput source="name" label="Name" fullWidth />
      <TextInput source="email" label="Email Address" fullWidth />
      <SaveButton label="Invite" disabled={mutation.isLoading} />
    </SimpleForm>
  );
};

export default InviteUserForm;
