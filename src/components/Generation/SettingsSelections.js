import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import "./SettingsSelections.css";
import Button from 'react-bootstrap/Button';
import { PDFCreate } from './PDFCreate';



const SettingsSelections = ({grade}) =>{

    const [selectedTopic, setSelectedTopic] = useState();
    const [difficulty, setDifficulty] = useState();
    const [columns, setColumns] = useState(false);
    const [numProblems, setNumProblems] = useState(10);

    const grades = {
        "1st": ["Numbers", "Telling Time", "Place Value", "Fraction", "Addition"],
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

    const handleSelectDifficulty = (e) =>{
        setDifficulty(e.target.value);
    }

    const handleSetColumns = (e) =>{
        console.log(columns)
        setColumns((prev) => !prev);
    }

    const handleSetNumProblems = (e) =>{
        setNumProblems(e.target.value)
    }

    const AdditionOptions = () =>{
        switch(grade){
            case "1st":
                return(
                    <>
                        <div className = "selectionRow">
                            <h3>Difficulty: </h3>
                            <Form.Select onChange={handleSelectDifficulty} value = {difficulty}>
                                <option></option>
                                <option key = {0} value = "Adding within 10" >Adding within 10</option>
                                <option key = {1} value = "Adding within 20" >Adding within 20</option>
                            </Form.Select>
                        </div>
                        <div className = "selectionRow">
                            <h3>Problems: </h3>
                            <Form.Select onChange={handleSetNumProblems} value = {numProblems}>
                                <option></option>
                                <option key = {0} value = {10}> 10</option>
                                <option key = {1} value = {15} >15</option>
                                <option key = {0} value = {10}> 20</option>
                                <option key = {1} value = {15} >25</option>
                            </Form.Select>
                        </div>
                        <div className = "selectionRow">
                            <h3>Columns?: </h3>
                            <Form.Check onClick={handleSetColumns} value = {columns}
                                type="switch"
                                id="custom-switch"
                                checked = {columns}
                            />
                        </div>
                        <Button variant="primary" onClick = {() => PDFCreate(grade, selectedTopic, difficulty, columns, numProblems)}>Create</Button>
                    </>
                )
        }
    }

    // show different selections based on different grade levels
    switch(grade){
        case "1st":
            const topics = grades[grade]
            return(
                <div className = "selections">
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
                    {selectedTopic === "Addition"? <AdditionOptions></AdditionOptions> : <></>}
                </div>
            )
    }







}

export default SettingsSelections;