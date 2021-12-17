import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PrivateInvestigatorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Private Investigators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
