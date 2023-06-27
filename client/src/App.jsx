import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CurrentUser from './components/CurrentUser'
import MainPanel from './pages/MainPanel'
import Login from './pages/Login'
import ChangeHours from './components/ChangeHours'
import Register from './components/Register'
import Addactivities from './components/Addactivities'
import DeleteUser from './components/DeleteUser'
import EditUser from './components/EditUser'
import DisplayUsers from './components/DisplayUsers'
import { useState } from 'react'
import { UserContext } from '../UserContext'
import PrivateRoute from './components/PrivateRoute'
// import DisplayActivites from './components/DisplayActivites'
import ActivitiesDisplay from './components/ActivitiesDisplay'
import DeleteActivities from './components/DeleteActivities'
import EditActivity from './components/EditActivity'
// import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  const [value, setValue] = useState({ name: 'Please log in', role: '' })

  return (
    <Router>
      <UserContext.Provider value={{ value, setValue }}>
        <Header />
        <CurrentUser />

        <div className='container w-screen'>
          <div className='w-3/4 h-1/2 flex m-auto'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <MainPanel />
                  </>
                }
              ></Route>

              <Route path='/login' element={<Login />} />

              <Route path='/register' element={<PrivateRoute />}>
                <Route path='/register' element={<Register />} />
              </Route>

              <Route path='/mainpanel' element={<PrivateRoute />}>
                <Route path='/mainpanel' element={<MainPanel />} />
              </Route>
              <Route path='/changehours' element={<PrivateRoute />}>
                <Route path='/changehours' element={<ChangeHours />} />
              </Route>
              <Route path='/addactivities' element={<PrivateRoute />}>
                <Route path='/addactivities' element={<Addactivities />} />
              </Route>
              <Route path='/deleteuser' element={<PrivateRoute />}>
                <Route path='/deleteuser' element={<DeleteUser />} />
              </Route>
              <Route path='/edituser' element={<PrivateRoute />}>
                <Route path='/edituser' element={<EditUser />} />
              </Route>
              <Route path='/editactivity' element={<PrivateRoute />}>
                <Route path='/editactivity' element={<EditActivity />} />
              </Route>
              <Route path='/deleteactivities' element={<PrivateRoute />}>
                <Route
                  path='/deleteactivities'
                  element={<DeleteActivities />}
                />
              </Route>
              <Route path='/activitiesdisplay' element={<PrivateRoute />}>
                <Route
                  path='/activitiesdisplay'
                  element={<ActivitiesDisplay />}
                />
              </Route>
              <Route path='/displayusers' element={<PrivateRoute />}>
                <Route path='/displayusers' element={<DisplayUsers />} />
              </Route>
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
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
