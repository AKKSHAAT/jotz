import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../utils/db';


export const NewButton = ({large}) => {
    const navigate = useNavigate();

    const generateNote = async ()=>{
        const newID = parseInt(uuidv4())
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
              <i className={`fa-solid fa-plus ${large}`}> </i>
    </button>
  )
}
