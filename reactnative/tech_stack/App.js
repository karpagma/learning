import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './src/reducers';
import {Header} from './src/common';
import LibraryList from './src/LibraryList';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
