/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import './i18n';
import './utils/ignore-warnings';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Config from 'react-native-config';
import { initFonts } from './theme/fonts'; // expo
import * as storage from './utils/storage';
import { AppNavigator, useNavigationPersistence } from './navigators';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { ToggleStorybook } from '../storybook/toggle-storybook';
import { ErrorBoundary } from './screens/Error/ErrorBoundary';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const httpLink = new HttpLink({ uri: Config.GRAPHQL_ENDPOINT });
const authLink = setContext(async (_, { headers }) => {
  const root = await storage.load('root');
  const token = root?.auth?.accessToken;
  const authprops = token ? { authorization: `Bearer ${token}` } : {};
  // attach authorization token to headers
  return {
    headers: {
      ...headers,
      ...authprops,
    },
  };
});
const link = ApolloLink.from([authLink, httpLink]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

/**
 * This is the root component of our app.
 */
function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      await initFonts(); // expo
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !isNavigationStateRestored) return null;

  // otherwise, we're ready to render the app
  return (
    <ToggleStorybook>
      <ApolloProvider client={client}>
        <RootStoreProvider value={rootStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ErrorBoundary catchErrors={'always'}>
              <AppNavigator
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
              />
            </ErrorBoundary>
          </SafeAreaProvider>
        </RootStoreProvider>
      </ApolloProvider>
    </ToggleStorybook>
  );
}

export default App;
