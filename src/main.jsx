import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegistrationForm from './registration-form.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>,
)
