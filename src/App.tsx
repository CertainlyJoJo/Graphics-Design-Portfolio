import './App.css'
import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects'
import Error404 from './Components/Error404'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='my-projects' element={<Projects/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App
