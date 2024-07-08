import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConceptosBasicos } from './components/ConceptosBasicos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Router</h1>
        <ConceptosBasicos></ConceptosBasicos>
      </div>
    </>
  )
}

export default App
