import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Dashboard.css';

function Dashboard() {
  const [date, setDate] = useState(null);
  const [error, setError] = useState('');
  const { currentUser, logout, getIdToken } = useAuth();

  useEffect(() => {
    async function getDate() {
      try {
        // Get the Firebase ID token
        const token = await getIdToken();
        
        // Make authenticated request to the API
        const res = await fetch('/api/date', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (res.ok) {
          const newDate = await res.text();
          setDate(newDate);
        } else {
          setError('Failed to fetch date from API');
        }
      } catch (err) {
        setError('Error fetching date: ' + err.message);
      }
    }
    getDate();
  }, [getIdToken]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Failed to log out: ' + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🔐 Secure Dashboard</h1>
        <div className="user-info">
          <span className="user-email">{currentUser?.email}</span>
          <button onClick={handleLogout} className="btn-logout">
            Log Out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="welcome-card">
          <h2>Welcome, {currentUser?.email?.split('@')[0]}! 👋</h2>
          <p className="success-message">
            You are successfully authenticated with Firebase Authentication!
          </p>
        </div>

        <div className="info-card">
          <h3>🔥 Firebase Authentication</h3>
          <p>
            This application uses <strong>Firebase Authentication</strong>, one of the most
            popular open-source authentication frameworks. Features include:
          </p>
          <ul>
            <li>✅ Email/Password Authentication</li>
            <li>✅ Google OAuth Integration</li>
            <li>✅ Secure Token Management</li>
            <li>✅ Real-time Auth State</li>
            <li>✅ Protected API Routes</li>
          </ul>
        </div>

        <div className="api-card">
          <h3>📡 API Integration</h3>
          <p>
            Deployed with{' '}
            <a
              href="https://vercel.com/docs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vercel
            </a>
            ! This project combines <strong>React</strong> frontend with a <strong>Go</strong> serverless backend.
          </p>
          <div className="date-display">
            <h4>Server Date (Authenticated Request):</h4>
            {error ? (
              <p className="error-text">{error}</p>
            ) : date ? (
              <p className="date-text">{date}</p>
            ) : (
              <p className="loading-text">Loading date...</p>
            )}
          </div>
        </div>

        <div className="tech-stack">
          <h3>🛠 Tech Stack</h3>
          <div className="tech-badges">
            <span className="badge">React</span>
            <span className="badge">Firebase</span>
            <span className="badge">Go</span>
            <span className="badge">Vercel</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
