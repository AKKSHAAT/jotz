import { useState } from 'react'
import { Editor } from './components/editor'
import { Explorer } from './components/explorer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Explorer/>
      <Editor/>
    </main>
  )
}

export default App
