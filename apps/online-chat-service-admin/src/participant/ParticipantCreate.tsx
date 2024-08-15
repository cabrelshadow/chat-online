import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";
import { UserTitle } from "../user/UserTitle";

export const ParticipantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="ChatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
