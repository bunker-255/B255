
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Entrepreneurs } from './pages/Entrepreneurs';
import { Contact } from './pages/Contact';
import { Tools } from './pages/Tools';
import { InvoiceGen } from './pages/InvoiceGen';
import { QrGen } from './pages/QrGen';
import { Ideas } from './pages/Ideas';
import { Investors } from './pages/Investors';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/invoice-gen" element={<InvoiceGen />} />
            <Route path="/tools/qr-gen" element={<QrGen />} />
            <Route path="/about" element={<About />} />
            <Route path="/entrepreneurs" element={<Entrepreneurs />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
