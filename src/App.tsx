import { useState } from 'react'
import './styles/Global.scss'
import { Header } from './components/Header/Header'
import { DataFetcher } from './components/DataFetcher/DataFetcher'

function App() {
  const [searchState,setSearchState] = useState<string|null|undefined>(null)
  return (
    <>
    <Header props={setSearchState}/>
    <DataFetcher props={searchState} />
    </>
  )
}

export default App
