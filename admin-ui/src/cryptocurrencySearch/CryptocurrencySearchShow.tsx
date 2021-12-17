import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CryptocurrencySearchShow = (
  props: ShowProps
): React.ReactElement => {
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
      </SimpleShowLayout>
    </Show>
  );
};
