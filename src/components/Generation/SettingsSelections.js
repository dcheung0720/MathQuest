import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import "./SettingsSelections.css";

const SettingsSelections = ({grade}) =>{

    const [selectedTopic, setSelectedTopic] = useState();

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

    const handleSelectTopic = (e) =>{
        setSelectedTopic(e.target.value);
    }

    const AdditionOptions = () =>{
        switch(grade){
            case "1st":
                return(
                    <>
                        <Form.Select>
                            
                        </Form.Select>
                    </>
                )
        }
    }

    // show different selections based on different grade levels
    switch(grade){
        case "1st":
            const topics = grades[grade]
            return(
                <>
                    <div className = "selectionRow">
                        <h3>Topic: </h3>
                        <Form.Select onChange={handleSelectTopic}>
                            <option></option>
                            {topics.map((topic, idx) =>{
                                return(
                                    <option key = {idx} value={topic}>{topic}</option>
                                )
                            })}
                        </Form.Select>
                    </div>
                    {selectedTopic === "Addition"}
                </>
            )
    }







}

export default SettingsSelections;