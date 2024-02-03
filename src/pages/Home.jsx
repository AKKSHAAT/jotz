import React from 'react'
import { catImage, randomCatMsgs } from '../utils/catStuff'
import { NewButton } from '../components/newButton'

export const Home = () => {


  return (
    <div className='right'>
        <div className='cat-section'>
            <pre>
            <p>{randomCatMsgs()}</p>
                <div>
                  {catImage}
                </div>
            <div>
            <NewButton classes={"large"}/>
            </div>
            </pre>
        </div>
    </div>
  )
}
