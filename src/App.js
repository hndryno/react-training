import './App.css';
import Component1 from './Component/Component1'
import Biodata from './Component/Biodata'

function App() {
  return (
    <div className="App">
      {/* contoh props */}
      <Biodata nama={'hendritono'} umur={9}  /> {/* yang bisa dipindahkan oleh props bisa fungsi atau juga data, biasa digunakan untuk komunikasi data antar komponen */}
      <Biodata nama={'hendritono2'} umur={19}  /> 
      <h1>huihui</h1>
      <Component1/>
    </div>
  );
}

export default App;
