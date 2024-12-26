import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct relative path to components/Navbar
import RepositoryList from './pages/RepositoryList';  // Correct relative path to pages/RepositoryList
import Login from './pages/Login';  // Correct relative path to pages/LoginPage

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 h-screen flex overflow-auto scrollbar-hide">
        <Routes>
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Repository Page */}
          <Route path="/repository" element={
            <>
              <Navbar />
              <main className="flex-1 p-0 sm:p-6 overflow-auto w-full h-full">
                <RepositoryList />
              </main>
            </>
          } />

          {/* Fallback for 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
