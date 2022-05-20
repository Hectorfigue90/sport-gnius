import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntroPage from './Pages/IntroPage'
import HomePage from './Pages/HomePage'
import TournamentsPage from './Pages/TournamentsPage';
import AuthPage from './Pages/AuthPage'
import PDTournament from './Pages/PDinscription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<IntroPage/>}/>
        <Route exact path="/results" element ={<HomePage/>}/>
        <Route exact path="/tournaments" element ={<TournamentsPage/>}/>
        <Route exact path="/Auth" element ={<AuthPage/>}/>
        <Route exact path="/pdtournament" element ={<PDTournament/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
