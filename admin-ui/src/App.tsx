import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PrivateInvestigatorList } from "./privateInvestigator/PrivateInvestigatorList";
import { PrivateInvestigatorCreate } from "./privateInvestigator/PrivateInvestigatorCreate";
import { PrivateInvestigatorEdit } from "./privateInvestigator/PrivateInvestigatorEdit";
import { PrivateInvestigatorShow } from "./privateInvestigator/PrivateInvestigatorShow";
import { CryptocurrencySearchList } from "./cryptocurrencySearch/CryptocurrencySearchList";
import { CryptocurrencySearchCreate } from "./cryptocurrencySearch/CryptocurrencySearchCreate";
import { CryptocurrencySearchEdit } from "./cryptocurrencySearch/CryptocurrencySearchEdit";
import { CryptocurrencySearchShow } from "./cryptocurrencySearch/CryptocurrencySearchShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Crypto Investigation"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PrivateInvestigator"
          list={PrivateInvestigatorList}
          edit={PrivateInvestigatorEdit}
          create={PrivateInvestigatorCreate}
          show={PrivateInvestigatorShow}
        />
        <Resource
          name="CryptocurrencySearch"
          list={CryptocurrencySearchList}
          edit={CryptocurrencySearchEdit}
          create={CryptocurrencySearchCreate}
          show={CryptocurrencySearchShow}
        />
      </Admin>
    </div>
  );
};

export default App;
