`//TODO:FIX INPUT AND TEXTAREA CSS `
import { useState } from 'react'
import { Editor } from './components/Editor'
import { Explorer } from './components/Explorer'
import { Route, Routes} from 'react-router-dom'
import { Pomodoro } from './components/Pomodoro'
import { Home
 } from './pages/home'
import { Note } from './pages/Note'

//TODO: add indexed DB functionality done lmaooo
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Explorer/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/new" element={<Editor/>} />
        <Route path="/:id" element={<Note/>} />
      </Routes>
      <Pomodoro />
    </main>
  )
}

export default App
