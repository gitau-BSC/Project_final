import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import LoginForm from './components/features/auth/LoginForm';
import About from './components/About';
import Contact from './components/Contact';
import BookNow from './components/BookNow';
import StudentDashboard from './components/StudentDashboard';
import RegisterForm from './components/features/auth/RegisterForm';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Layout>
  );
}

export default App;
