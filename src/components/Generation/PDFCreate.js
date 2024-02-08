import { jsPDF } from "jspdf";
import { NumberGenerations } from "./NumberGeneration";

export const PDFCreate = (grade, topic, difficulty, columns, numProblems) =>{
    const doc = new jsPDF();
    const fontSize = 12;
    // Set font size and style for the header
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", "normal");

    // Add text for Name at top left
    const nameX = 10;
    const nameY = 10;
    doc.text("Name:", nameX, nameY);

    // Add text for Date at top right
    const dateX = doc.internal.pageSize.getWidth() - doc.getStringUnitWidth("Date:")* 12 - 40;
    const dateY = 10;
    doc.text("Date:", dateX, dateY);

    // Draw lines for students to write their names and dates
    const lineY = 10;
    const lineLength = 50;
    const offsetName = doc.getTextWidth("Name:");
    const offsetDate = doc.getTextWidth("Date:");

    doc.line(nameX + offsetName, lineY, nameX + lineLength + offsetName, lineY); // Line for Name
    doc.line(dateX + offsetDate, lineY, dateX + lineLength + offsetDate, lineY); // Line for Date

    switch(topic){
        case "Addition":
            switch(difficulty){
                case "Adding within 10":



                    // Save the PDF
                    doc.save("example.pdf");
            }

            break;
    }
}