import React from 'react'
import { catImage, randomCatMsgs } from '../utils/catStuff'
import { Link } from 'react-router-dom'
import { NewButton } from '../components/newButton'

export const Home = () => {


  return (
    <div className='right'>
        <div className='cat-section'>
            <pre>
                <div>
                  {catImage}
                </div>
            <p>{randomCatMsgs()}</p>
            <div>
            <NewButton large={"large"}/>
            </div>
            </pre>
        </div>
    </div>
  )
}
