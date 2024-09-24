import React from 'react'
import { createBrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from 'home';
import JobDetails from 'jobdetails';

function App() {

  return (
    
    <Router>
      <div className='App'>
        <main>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/jobdetails' elementment= {<JobDetails/>}/>
          </Routes>
        </main>
      </div>
    </Router>
    
  )
}

export default App;