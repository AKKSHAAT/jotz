import React from 'react'
import { catImage, randomCatMsgs } from '../utils/catStuff'

export const Home = () => {


  return (
    <div className='right'>
        <div className='cat-section'>
            <pre>
                <div>
                  {catImage}
                </div>
            <p>{randomCatMsgs()}</p>
            </pre>
        </div>
    </div>
  )
}
