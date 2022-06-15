import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Welcome } from '@thaddeusjiang/react-component-starter';

const App = () => {
  return (
    <div className="">
      <Welcome />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
