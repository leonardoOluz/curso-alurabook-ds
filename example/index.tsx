import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../src';
import { AbTag } from '../src';
import { CardLivros } from '../src';
const App = () => {
  return (
    <div>
      <CardLivros>
        <AbBotao tipo='secundario' texto='clique' />
        <AbTag texto='Android' />
      </CardLivros>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
