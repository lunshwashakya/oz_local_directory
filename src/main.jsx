import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Logo from './components/Logo.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import ResetPassword from './pages/Resetpassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Jobs from './pages/Jobs.jsx';
import JobsDetails from './pages/JobDetails.jsx';
import NewJob from './pages/NewJob.jsx';
import EditJob from './pages/EditJob.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='jobs/new' element={<NewJob />} />
        <Route path='jobs/:id' element={<JobsDetails />} />
        <Route path='jobs/:id/edit' element={<EditJob />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
