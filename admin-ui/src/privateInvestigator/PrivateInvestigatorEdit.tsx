import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const PrivateInvestigatorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Code" source="code" />
        <TextInput label="Company Name" source="companyName" />
        <TextInput
          label="Company Registration Id"
          source="companyRegistrationId"
        />
        <TextInput label="Cyber Security Expert" source="cyberSecurityExpert" />
        <TextInput
          label="Fraud Investigation Number"
          source="fraudInvestigationNumber"
        />
        <TextInput label="Image" source="image" />
        <TextInput
          label="Investigator Email"
          source="investigatorEmail"
          type="email"
        />
        <TextInput label="Investigator Name" source="investigatorName" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
