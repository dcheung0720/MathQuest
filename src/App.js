import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import TabSelections from './components/Generation/TabSelections';

function App() {



  // Default export is a4 paper, portrait, using millimeters for units
  
  return (
    <div className="App">
        <Navigation></Navigation>
        <div className='PDFCreate' style = {{display: "flex", justifyContent: "center"}}>
          <TabSelections></TabSelections>
        </div>
    </div>
  );
}

export default App;
