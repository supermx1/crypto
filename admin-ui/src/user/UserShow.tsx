import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PRIVATEINVESTIGATOR_TITLE_FIELD } from "../privateInvestigator/PrivateInvestigatorTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="Private Investigators"
          source="privateinvestigator.id"
          reference="PrivateInvestigator"
        >
          <TextField source={PRIVATEINVESTIGATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Case" target="UserId" label="Cases">
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="Block Number" source="blockNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Cryptocurrency Type"
              source="cryptocurrencyType"
            />
            <TextField label="From Wallet" source="fromWallet" />
            <TextField label="ID" source="id" />
            <TextField label="Key Phrase" source="keyPhrase" />
            <TextField label="Private Note" source="privateNote" />
            <TextField label="Status" source="status" />
            <TextField label="Time of Theft" source="timeOfTheft" />
            <TextField label="To Wallet" source="toWallet" />
            <TextField label=" Transaction Hash" source="transactionHash" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
