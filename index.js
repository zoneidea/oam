/**
 * @format
 */

import App from './App'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import configureStore from './utils/configureStore'
import { name as appName } from './app.json';

const store = configureStore()
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <Provider store={store}>
        <App />
    </Provider>;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
