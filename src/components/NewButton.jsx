import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { db } from '../utils/db';


export const NewButton = ({classes}) => {
    const navigate = useNavigate();
    const date = new Date(); // To generate IDs
    const generateNote = async ()=>{
        const newID = parseInt(date.valueOf());
        const blankNote = {
            id: newID,
            title: "",
            note: ""
        }
        const note = await db.notes.add(blankNote)
        .then(note=>{
            navigate(`/${note}`);
            console.log("added");
        })
        .catch(err=>{
            console.log("err in btn:::: ", err);
        })
    } 


  return (
    <button  onClick={generateNote} className="button" to={'/new'}>
              <i className={`fa-solid fa-plus ${classes}`}> </i>
    </button>
  )
}
