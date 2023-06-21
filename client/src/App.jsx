import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPanel from './pages/MainPanel'
import Login from './pages/Login'
import DisplayHours from './components/DisplayHours'
import ChangeHours from './components/ChangeHours'
import Register from './components/Register'
// import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <Router>
      <Header />
      <div className='container w-screen'>
        <div className='w-96 flex mx-auto'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Login />
                </>
              }
            ></Route>

            <Route path='/mainpanel' element={<MainPanel />} />
            <Route path='/login' element={<Login />} />
            <Route path='/displayhours' element={<DisplayHours />} />
            <Route path='/changehours' element={<ChangeHours />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }

// export default App
