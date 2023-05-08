import Experience from './experience/Experience';
import { Fragment } from 'react';
import { Leva } from 'leva';

function App() {
  return (
    <Fragment>
      <Leva collapsed />
      <Experience />
    </Fragment>
  );
}

export default App;
