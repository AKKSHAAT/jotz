import { useState } from 'react'
import { Editor } from './components/Editor'
import { Explorer } from './components/Explorer'
import { Route, Routes} from 'react-router-dom'
// import { Pink } from './components/Pink'
import { Note } from './pages/Note'

//TODO: add indexed DB functionality done lmaooo
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Explorer/>
      <Routes>
        <Route path="/" element={<Editor/>} />
        <Route path="/:id" element={<Note/>} />
      </Routes>
    </main>
  )
}

export default App
