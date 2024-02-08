import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import SettingsSelections from './SettingsSelections';

const TabSelections = () =>{

    const [selection, setSelection] = useState("None");

    const grades = {
        "1st": ["Numbers", "Telling Time", "Place Value", "Fraction"],
        "2nd": ["Counting Money", "Telling Time", "Adding", "Subtracting"],
        "3rd": ["Addition", "Subtraction", "Multiplication", "Division"],
        "4th": ["Place Value", "Rounding"],
        "5th": [],
        "6th": [],
        "7th": [],
        "8th": [],
        "9th": [],
        "10th": [],
        "11th": [],
        "12th": [],
        "12+": [],
    }

    const handleTabSelect = (e) =>{
        setSelection(e.target.textContent);
        console.log(e.target.textContent)
    }



    return (
        <div className = "Selection">
            <Nav variant="tabs" defaultActiveKey="/home" style = {{width: "500px"}}> 
                {
                    Object.keys(grades).map((grade) =>{
                        return(            
                            <Nav.Item onClick={handleTabSelect}>
                                <Nav.Link>{grade}</Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
            <SettingsSelections grade = {selection}></SettingsSelections>
        </div>
        );
}

export default TabSelections;