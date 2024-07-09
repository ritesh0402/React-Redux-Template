import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './reduxStore/hooks/counterHook';
import { RootState } from './reduxStore/store';
import { decrement, incAsync, increment } from './reduxStore/slices/counter/counter';

function App() {
  const count = useAppSelector((state: RootState) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())} >Increment</button>
        <button onClick={() => dispatch(decrement())} >Decrement</button>
        <button onClick={() => dispatch(incAsync(10))} >Increment Async</button>
      </header>
    </div>
  );
}

export default App;
