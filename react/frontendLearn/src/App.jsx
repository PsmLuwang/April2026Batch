import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import RegistrationPage from './pages/RegistrationPage'

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/registration" element={<RegistrationPage />} />

      <Route path="/contact" element={<ContactPage />} />

    </Routes>
  )
}

export default App