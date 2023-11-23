import Cars from './components/cars'
import './App.css'
import Navbar from './components/navbar'
import Carview from './components/Carview'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {

  return (
    
    <Router >
    
    <>
  

      <Navbar></Navbar>
      <Switch>
  


        <Route exact path={'/'}>

          <Cars></Cars>


        </Route>
    
        <Route path={'/Carview'}>

          <Carview></Carview>          

        </Route>


      </Switch>

      
    
    </>


    </Router>
  )
}

export default App
