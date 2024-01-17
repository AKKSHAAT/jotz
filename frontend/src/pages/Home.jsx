import React from 'react'
import { catImage, randomCatMsgs } from '../utils/catStuff'
import { Link } from 'react-router-dom'

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
              <Link  className="button" to={'/new'}>
                <i className="fa-solid fa-plus large">
                </i>
              </Link>
            </div>
            </pre>
        </div>
    </div>
  )
}
