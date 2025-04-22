import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(
            <>
            
              <Link to="/login">
                <button>Login</button>
              </Link><Link to="/dashboard">
                <button>Dashboard</button>
              </Link>

            </>

          )} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<h1> Error :- 404</h1>} />

        </Routes>

      </BrowserRouter>
    </>


  )
}