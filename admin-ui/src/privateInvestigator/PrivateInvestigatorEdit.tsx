import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PrivateInvestigatorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
      </SimpleForm>
    </Edit>
  );
};
