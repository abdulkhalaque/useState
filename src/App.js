import "./styles.css";
import {useState} from 'react'
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter />
    </div>
  );
}
function Counter (){
  const [count, setCount] = useState(0)
    return (
      <>
       <div>
        <h1> {count} </h1>
        <button onClick={()=>setCount(count +1)}> Red Counter </button>
       </div>
      </>
    )
}
