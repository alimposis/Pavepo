import { useState } from 'react'
import './styles/Global.scss'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'

function App() {
  const [searchState,setSearchState] = useState<string|null|undefined>(null)
  return (
    <>
    <Header props={setSearchState}/>
    <Container/>
    </>
  )
}

export default App
