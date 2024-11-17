Lengkapi kode, untuk menambah nilai 1 kedalam array di variable arr setiap button Tambah di click.

import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

function Total() {
 // arr type datanya adalah array
 const [arr, setArr] = useState([1]);

 function handleClick() {
   // isi disini
 }


 return (
   <div>
     <p>Total Length Array {arr.length}</p>
     <button onClick={handleClick}>Tambah</button>
   </div>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Total />);
