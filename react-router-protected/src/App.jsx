import { useState } from 'react'
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import './App.css'
import {Admin, Analytics, Dashboard, Home, Landing}  from './pages/index'
import {ProtectedRoute} from "./components/ProtectedRoute"
function App() {
  const [user,setUser] = useState(null)
  const login = ()=>{
    setUser({
      id:1,
      name:"Franco",
      permissions:["analize"],
      rols:["admin"]
    })
  }
  const logout = ()=> setUser(null)
  return (
    <BrowserRouter>
    <Navegation />

    {user ?
    (<button onClick={logout}>Logout</button>):
    (<button onClick={login}>Login</button>)
    }
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/landing" element={<Landing />}/>
        <Route element={<ProtectedRoute isAllaowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
        <Route path="/analytics" element={
          <ProtectedRoute isAllaowed={!!user&& user.permissions.includes('analize')} redirectTo='/home' >
            <Analytics />
          </ProtectedRoute>
        }/>
        <Route path="/admin" element={
        <ProtectedRoute isAllaowed={!!user&& user.rols.includes('admin')} redirectTo='/home' >
            <Admin />
          </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}
function Navegation(){
  return <nav>
    <ul>
      <li><Link to="/landing">Landing</Link></li>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/analytics">Analytics</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  </nav>
}

export default App
