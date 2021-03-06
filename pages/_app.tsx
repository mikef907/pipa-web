import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  setUserFromLocalStorage,
  checkRoles,
  UserContext,
} from '../context/UserContext';
import { buildClientSchema } from 'graphql';
import { withScalars } from 'apollo-link-scalars';
import introspectionResults from '../graphql.schema.json';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayJsUtils from '@date-io/dayjs';
import { createUploadLink } from 'apollo-upload-client';
import { IUser } from '../interfaces/IUser';
import { cyan, deepOrange, green, orange } from '@material-ui/core/colors';
import { ThemeContext } from '../context/ThemeContext';
import { API, IS_SERVER, TOKEN } from '../constants';

// we can also pass a custom map of functions. These will have priority over the GraphQLTypes parsing and serializing functions from the Schema.
const typesMap = {
  DateTime: {
    serialize: (parsed: Date) => parsed.toString(),
    parseValue: (raw: string | number | null): Date | null => {
      return raw ? new Date(raw) : null;
    },
  },
};

const schema = buildClientSchema(introspectionResults as any);

export const link = ApolloLink.from([
  withScalars({ schema, typesMap }),
  createUploadLink({
    uri: `${API}/graphql`,
  }),
]);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = !IS_SERVER ? localStorage.getItem('token') : '';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allStaff: {
            merge: false,
          },
        },
      },
    },
  }),
  link: authLink.concat(link),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});

const MyApp = (props: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? deepOrange[300] : cyan[400];
  const mainSecondaryColor = darkState ? green['A700'] : orange[900];

  useEffect(() => {
    setDarkState(localStorage.getItem('dark-theme') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-theme', `${darkState}`);
  }, [darkState]);

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const { Component, pageProps } = props;

  const [user, setUser] = useState<IUser | null>(null);

  //const value = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => setUser(setUserFromLocalStorage), []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => setIsMounted(true), []);

  return (
    <React.Fragment>
      <Head>
        <title>Early Parenting Support Alaska</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeContext.Provider
        value={{ state: darkState, setState: setDarkState }}
      >
        <ThemeProvider theme={darkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MuiPickersUtilsProvider utils={DayJsUtils}>
            <ApolloProvider client={client}>
              <UserContext.Provider value={{ user, setUser, checkRoles }}>
                {isMounted && <Component {...pageProps} />}
              </UserContext.Provider>
            </ApolloProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default MyApp;
