import React, { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import  ModalAuth  from './modalAuth/ModalAuth';

const menu = [
  { href: '/forum', icon: 'fa-comments', label: 'Forum' },
  { href: '/support', icon: 'fa-life-ring', label: 'Support' },
  { href: '/services', icon: 'fa-cogs', label: 'Services' },
  { href: '/free', icon: 'fa-gift', label: 'Free Distribution' },
  { href: '/mail', icon: 'fa-envelope', label: 'Mail' },
];

export default function Header() {
  
  const [modalLog, setModalLog] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen); // Функция для переключения состояния меню
  return (
    <>
      <header className="App-header">
        <nav>
          <Link className='link__to-home' to="/">
          <h2 className="footer-logo">HIB</h2>
          </Link>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <ul className={`menu ${menuOpen ? 'menu--open' : ''}`}>
            {menu.map(item => (
              <li key={item.href}>
                <Link to={item.href}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="menu__button">
            <li className="menu__button-item">
              <button onClick={() => setModalLog(true)} className="menu__button-item--btn">
                <i className="fa-solid fa-user"></i>
                <span>Login</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {modalLog && <ModalAuth onClose={() => setModalLog(false)} onSuccses={() => { setModalLog(false); setShowSuccess(true); }} />}
    </>
  );
}
