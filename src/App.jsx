import './App.css'
import { ConceptosBasicos } from './components/ConceptosBasicos'
import { CrudApi } from './components/CrudApi'
import { SongSearch } from './components/SongSearch'

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <hr />
        <SongSearch></SongSearch>
        <br /><br /><hr />
        <CrudApi></CrudApi>
        <br /><br /><hr />
        <ConceptosBasicos></ConceptosBasicos>
      </div>
    </>
  )
}

export default App
