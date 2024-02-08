import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

const TabSelections = () =>{

    const [selection, setSelection] = useState();

    const grades = {
        "1st": [],
        "2nd": [],
        "3rd": [],
        "4th": [],
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




    return (
        <div className = "Selection">
            <Nav variant="tabs" defaultActiveKey="/home" style = {{width: "500px"}}> 
                {
                    Object.keys(grades).map((grade) =>{
                        return(            
                            <Nav.Item>
                                <Nav.Link>{grade}</Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
            <div>Data</div>
        </div>
        );
}

export default TabSelections;