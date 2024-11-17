import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

function App() {
 // arr type datanya adalah array
 const [arr, setArr] = useState([1]);

 function handleClick() {
   setArr([...arr, arr.length + 1]);
 }


 return (
   <div>
     <p>Total Length Array {arr.length}</p>
     <button onClick={handleClick}>Tambah</button>
   </div>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App