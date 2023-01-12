import React from "react";
import { ChatComponent } from "../Chat";
import questions from "./questions";



export const Component = () => {
    
    return (
        <ChatComponent 
            questions={questions}
        />
    );
}