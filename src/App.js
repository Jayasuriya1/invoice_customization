import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GetPaid from './Components/getPaid';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/getpaid' element={<GetPaid/>}/>
          <Route path='*' element={<Navigate to="/getpaid"/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
