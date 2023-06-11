import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Dashboard from './pages/dashboard';
import StudentInfo from './components/student_entry_info';


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />           
            <Route path="/dashboard" element={<Dashboard/>} />           
            <Route path="/student_entry_info" element={<StudentInfo/>} />           
          </Routes>
      </Router>
      
    </>
    
  );
}

export default App;
