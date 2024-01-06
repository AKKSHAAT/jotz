import React from 'react'
import { catImage, randomCatMsgs } from '../utils/catStuff'

export const Home = () => {


  return (
    <div className='right'>
        <div className='cat-section'>
            <pre>
                {catImage}
            </pre>
            <p>{randomCatMsgs()}</p>
        </div>
    </div>
  )
}
