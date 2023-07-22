import './App.css';
import Popular from './components/pages/Popular';
import {Routes , Route} from "react-router-dom"
import Header from './components/Header/Header';
import Top_Rated from "./components/pages/Top_Rated"

function App() {
    return (
      <div className="App">
          
        <Header/>
        <Routes>
          <Route path='/' element={<Popular/>}/>
          <Route path='/about' element={<Top_Rated/>}/>
        </Routes>
    </div>
  );
}

export default App;
