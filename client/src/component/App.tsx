// filepath: c:\Users\User\Desktop\test\nord\src\component\App.tsx
import React from 'react';
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Forum from './Forum/Forum'
import AppRoutes from '../routes/routes';
import './Footer/footer.css'
import '../styles/global.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/reset.css';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;