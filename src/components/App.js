import React from 'react';

function* test() {
  while (true) {
    yield 1;
    yield 2;
    yield 3;
  }
}

function App() {
  const it = test();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  return <div className='App'>hi</div>;
}

export default App;
