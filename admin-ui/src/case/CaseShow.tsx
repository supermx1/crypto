import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CaseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <TextField label="Block Number" source="blockNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Cryptocurrency Type" source="cryptocurrencyType" />
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
      </SimpleShowLayout>
    </Show>
  );
};
