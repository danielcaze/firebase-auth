import React from "react"
import { Signup } from "./Signup"
import { Container } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Login } from "./Login"
import { UpdateProfile } from "./UpdateProfile"
import { ForgotPassword } from "./ForgotPassword"


export function App() {

  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={currentUser ? <Dashboard /> : <Navigate to='/login' />} />
            <Route
              path="/update-profile"
              element={currentUser ? <UpdateProfile /> : <Navigate to='/login' />}>
            </Route>
            <Route path="/signup" element={!currentUser ? <Signup /> : <Navigate to='/' />} />
            <Route path="/login" element={!currentUser ? <Login /> : <Navigate to='/' />} />
            <Route path="/forgot-password" element={!currentUser ? <ForgotPassword /> : <Navigate to='/login' />} />
          </Routes>
        </Router>
      </div>
    </Container>
  )
}
