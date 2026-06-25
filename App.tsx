
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Entrepreneurs } from './pages/Entrepreneurs';
import { Contact } from './pages/Contact';
import { Tools } from './pages/Tools';
import { CliTools } from './pages/CliTools';
import { InvoiceGen } from './pages/InvoiceGen';
import { QrGen } from './pages/QrGen';
import { Ideas } from './pages/Ideas';
import { Investors } from './pages/Investors';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Refunds } from './pages/Refunds';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider, useLanguage } from './lib/LanguageContext';

const LangSync: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, language } = useLanguage();
  const location = useLocation();

  const isValidLang = lang && ['en', 'ru', 'he'].includes(lang);

  useEffect(() => {
    if (isValidLang && lang !== language) {
      setLanguage(lang as any);
    }
  }, [lang, language, setLanguage, isValidLang]);

  if (!isValidLang) {
    // If the first segment is not a valid language, it's a path like /services
    // Redirect to include the language prefix
    return <Navigate to={`/${language}${location.pathname}${location.search}`} replace />;
  }

  return <>{children}</>;
};

const RootRedirect = () => {
  const { language } = useLanguage();
  const location = useLocation();
  // Avoid redirect loop if we are already at root and trying to go to root
  const path = location.pathname === '/' ? `/${language}${location.search}` : `/${language}${location.pathname}${location.search}`;
  return <Navigate to={path} replace />;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <LanguageProvider>
          <Routes>
            <Route path="/:lang/*" element={
              <LangSync>
                <Layout>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/:id" element={<ServiceDetail />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="cli-tools" element={<CliTools />} />
                    <Route path="tools/invoice-gen" element={<InvoiceGen />} />
                    <Route path="tools/qr-gen" element={<QrGen />} />
                    <Route path="about" element={<About />} />
                    <Route path="entrepreneurs" element={<Entrepreneurs />} />
                    <Route path="investors" element={<Investors />} />
                    <Route path="ideas" element={<Ideas />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPost />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="refunds" element={<Refunds />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Layout>
              </LangSync>
            } />
            <Route path="*" element={<RootRedirect />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
