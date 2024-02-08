import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { jsPDF } from "jspdf";
import Navigation from './components/Navigation/Navigation';

function App() {



  // Default export is a4 paper, portrait, using millimeters for units
  // const doc = new jsPDF();

  // doc.text("Hello world!", 100, 100);
  // doc.save("a4.pdf");
  return (
    <div className="App">
        <Navigation></Navigation>
    </div>
  );
}

export default App;
