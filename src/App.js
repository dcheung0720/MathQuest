import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { jsPDF } from "jspdf";
import Navigation from './components/Navigation/Navigation';
import TabSelections from './components/Generation/TabSelections';

function App() {



  // Default export is a4 paper, portrait, using millimeters for units
  // const doc = new jsPDF();

  // doc.text("Hello world!", 100, 100);
  // doc.save("a4.pdf");


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
