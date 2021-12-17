import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CryptocurrencySearchCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <NumberInput step={1} label="Block Number" source="blockNumber" />
        <SelectInput
          source="cryptocurrencyType"
          label="Cryptocurrency Type"
          choices={[
            { label: "Bitcoin", value: "Bitcoin" },
            { label: "Ethereum", value: "Ethereum" },
            { label: "Litecoin", value: "Litecoin" },
            { label: "Dogecoin", value: "Dogecoin" },
            { label: "Ripple", value: "Ripple" },
            { label: "Shiba", value: "Shiba" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="From Wallet" source="fromWallet" />
        <TextInput label="Key Phrase" multiline source="keyPhrase" />
        <TextInput label="Private Note" multiline source="privateNote" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Processing", value: "Processing" },
            { label: "Completed", value: "Completed" },
            { label: "Failed", value: "Failed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Time of Theft" source="timeOfTheft" />
        <TextInput label="To Wallet" source="toWallet" />
        <TextInput label=" Transaction Hash" source="transactionHash" />
      </SimpleForm>
    </Create>
  );
};
