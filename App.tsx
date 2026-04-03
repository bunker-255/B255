
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { LanguageProvider } from './lib/LanguageContext';

// Pages
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { SOS } from './pages/SOS';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Training } from './pages/Training';
import { Cases } from './pages/Cases';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Investors } from './pages/Investors';
import { Entrepreneurs } from './pages/Entrepreneurs';
import { Ideas } from './pages/Ideas';
import { Tools } from './pages/Tools';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
      return (
          <div className="min-h-screen bg-bunker-950 flex items-center justify-center">
              <div className="text-neon-green font-mono text-sm animate-pulse tracking-widest">
                  INITIALIZING_SECURE_CONNECTION...
              </div>
          </div>
      );
  }
  
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuth();
    const ADMIN_EMAIL = 'admin@bunker-255.com';

    if (loading) return null;

    // Check against user email from custom table
    if (!user || user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (!loading && user) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

              {/* Public Pages */}
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/training" element={<Training />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/entrepreneurs" element={<Entrepreneurs />} />
              <Route path="/ideas" element={<Ideas />} />
              
              {/* Protected Routes */}
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/sos" element={<ProtectedRoute><SOS /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/tools" element={<ProtectedRoute><Tools /></ProtectedRoute>} />

              {/* Admin Route */}
              <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
