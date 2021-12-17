import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PrivateInvestigatorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Company Name" source="companyName" />
        <TextField
          label="Company Registration Id"
          source="companyRegistrationId"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Cyber Security Expert" source="cyberSecurityExpert" />
        <TextField
          label="Fraud Investigation Number"
          source="fraudInvestigationNumber"
        />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Investigator Email" source="investigatorEmail" />
        <TextField label="Investigator Name" source="investigatorName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
