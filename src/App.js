import React, {useState} from 'react'
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
function App() {
  const [value, setValue] = useState('Какой-то текст')


  return (
    <div className="App">
      <ClassCounter/>

      </div>
  );
}

export default App;
