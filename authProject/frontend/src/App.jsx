import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/LoginPage'
import SignupVerificationPage from './pages/SignupVerificationPage'
import HomePage from './pages/HomePage'
import { useAuthStore } from './stores/authStore'


const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) return children;

  return <Navigate to={"/login"} replace />
}


const App = () => {
  return (
    <>
      <Toaster />

      <Routes>

        
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/verification" element={<SignupVerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App