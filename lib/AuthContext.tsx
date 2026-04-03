
import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from './api';

// Define our custom User type matching the database table structure
export interface User {
  id: number | string;
  email: string;
  role: string;
  business_name?: string;
  language?: string; // Added language property
  subscriptions?: {
    sos_business?: boolean;
    [key: string]: any;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem('bunker_user', JSON.stringify(userData));
  };

  const refreshSession = async () => {
    if (!user?.email) return;
    try {
        const results = await api.sql(`SELECT * FROM app_users WHERE email = '${user.email.toLowerCase()}' LIMIT 1`);
        const record = results[0]?.rows?.[0];
        
        if (record) {
            const freshUser: User = {
               id: record.id,
               email: record.email,
               role: record.role,
               business_name: record.business_name,
               subscriptions: record.subscriptions,
               language: record.language
            };
            updateUser(freshUser);
        }
    } catch (err) {
        console.error("Session refresh failed", err);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      // 1. Auto-initialize database tables if they don't exist
      try {
        await api.sql(`
          CREATE TABLE IF NOT EXISTS app_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            email TEXT UNIQUE,
            password TEXT,
            role TEXT DEFAULT 'CLIENT',
            business_name TEXT,
            language TEXT DEFAULT 'en',
            subscriptions TEXT DEFAULT '{"sos_business": false}'
          );
          CREATE TABLE IF NOT EXISTS sos_tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT,
            user_email TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            issue_type TEXT,
            description TEXT,
            urgency TEXT,
            status TEXT DEFAULT 'pending',
            cost TEXT DEFAULT '-',
            market_cost TEXT DEFAULT '-',
            solution TEXT,
            is_paid BOOLEAN DEFAULT 0
          );
        `);
        
        // Ensure admin exists and password is correct
        const adminCheck = await api.sql("SELECT * FROM app_users WHERE email = 'admin@bunker-255.com' LIMIT 1");
        if (adminCheck[0]?.rows?.length === 0) {
          await api.sql(`
            INSERT INTO app_users (email, password, role, business_name, subscriptions)
            VALUES ('admin@bunker-255.com', 'admin123', 'ADMIN', 'HQ Command', '{"sos_business": true}')
          `);
          console.log('Default admin user created');
        } else {
          // Force update password
          await api.sql("UPDATE app_users SET password = 'admin123' WHERE email = 'admin@bunker-255.com'");
          console.log('Admin password enforced');
        }
      } catch (e) {
        console.error('Database auto-init failed', e);
      }

      // 2. Check LocalStorage on mount to restore session
      const storedUser = localStorage.getItem('bunker_user');
      const token = api.getToken();
      
      if (storedUser && token) {
        try {
          const parsed = JSON.parse(storedUser);
          setUser(parsed);
          
          // CRITICAL FIX: Fetch latest data from DB immediately to sync permissions/subscriptions
          // This ensures that if Admin changed rights, the user gets them on reload.
          const results = await api.sql(`SELECT * FROM app_users WHERE email = '${parsed.email.toLowerCase()}' LIMIT 1`);
          const record = results[0]?.rows?.[0];

          if (record) {
             const freshUser: User = {
                id: record.id,
                email: record.email,
                role: record.role,
                business_name: record.business_name,
                subscriptions: record.subscriptions,
                language: record.language
             };
             setUser(freshUser);
             localStorage.setItem('bunker_user', JSON.stringify(freshUser));
          }
        } catch (e) {
          console.error('Failed to parse user session', e);
          localStorage.removeItem('bunker_user');
          api.removeToken();
        }
      } else {
          localStorage.removeItem('bunker_user');
          api.removeToken();
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (userData: User, token: string) => {
    api.setToken(token);
    updateUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bunker_user');
    api.removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
