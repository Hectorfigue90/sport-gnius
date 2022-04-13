import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntroPage from './Pages/IntroPage'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<IntroPage/>}/>
        <Route exact path="/home" element ={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
