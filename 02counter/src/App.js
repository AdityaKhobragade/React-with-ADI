import { useState } from 'react';

function App() {
  const [ counter, setCounter ] = useState( 15 )

  // let counter = 15;

  const addValue = () => {
    console.log( "counter===", counter );
    setCounter( counter + 1 );
  }

  const subValue = () => {
    console.log( "counter===", counter );
    setCounter( counter - 1 );
  }

  return (
    <>
      <h1>Hello world...!!! { counter }</h1>
      <h1>Counter Starts OK { counter }</h1>
      <h2>{ counter }</h2>
      <button onClick={ addValue }>+ 1 Dude</button>
      <br />
      <button onClick={ subValue }>- 1 Dude</button>
    </>
  );
}

export default App;
