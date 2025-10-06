import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function AppContent() {
  const [showLogin, setShowLogin] = useState(true);
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Dashboard />;
  }

  return showLogin ? (
    <Login onToggleView={() => setShowLogin(false)} />
  ) : (
    <Register onToggleView={() => setShowLogin(true)} />
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
