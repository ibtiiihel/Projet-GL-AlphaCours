import './App.css';
import Acceuil from './pages/Acceuil';
import {BrowserRouter as Router, Route ,Routes  }from "react-router-dom" ;
import AddAnnonce from './cmponents/AddAnnonce';
import AnnonceDetails from './cmponents/AnnonceDetails';

function App() {
  return (
    <div className="App">
      
       <Router>
        <Routes>
          <Route exact path='/' element={ <Acceuil/>}  />
          <Route exact path='/ajouterannonce' element={ <AddAnnonce/>}  />
          <Route exact path='/annoncedetails' element={ <AnnonceDetails/>}  />
       
        </Routes>
       </Router>
    </div>
  );
}

export default App;
