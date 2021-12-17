import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CryptocurrencySearchList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cryptocurrency Searches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
