import React from "react";
import {useState} from "react"
import { ReactDOM } from "react";

function MyForm() {
    const [name,setName]= useState("nishant") ;

    const handleSubmit = (event) => {
        
        alert(`your name is : ${name}`)
    }
    return(
        <form onSubmit={handleSubmit()}>
            <label> Enter you Name:
                <input type="text" value={name} placeholder="your name goes here"/>
            </label>
           <label>
               <input type="submit"/>
           </label>
        </form>
    )
}
export default MyForm;