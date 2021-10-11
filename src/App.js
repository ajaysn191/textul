import './App.css'
import NavBar from './Components/NavBar'
import { useState } from 'react'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light') //Whther darkmode is on or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return (
    <>
      {/* <Router> */}
      <NavBar
        title='TextUtils'
        // about='About'
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />

      <div className='container myCon my-4'>
        {/* <Switch> */}
        {/* <Route exact path='/About'>
              <About />
            </Route> */}
        {/* <Route exact path='/'> */}
        <TextForm showAlert={showAlert} heading='TextUtils' mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
