import React, { useState, useEffect } from 'react';
import './ModalAuth.css';
import './reg.css'
import FetchAuth from '../../fetch/fetchAuth';
type ModalAuthProps = {
  onClose: () => void;
  onSuccses: () => void;
};

  const ModalAuth = ({ onClose, onSuccses }: ModalAuthProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [succseReg, setSuccseReg] = useState(false)
  const [errorReg, setErrorReg] = useState(false)
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  
  interface RegistrationResponse {
  status: number;
  message?: string;
}

  // Блокировка скролла при открытии модалки
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    setErrorReg(false)
    setSuccseReg(false)
    e.preventDefault();
    if(activeTab === 'login') {
      const resLog = await FetchAuth.login(username, password);

      if(resLog && resLog.status === 200){
          console.log('успешный вход сучка!!')
          onSuccses()
      } else {
          console.log('сучка не может войти!!')
      }
    

    } else {
        FetchAuth.registration(username, password)
        const resReg = await FetchAuth.registration(username, password) as {status: number}
        console.log(resReg)
        if( resReg && resReg.status == 200) {
          setSuccseReg(true)
        } else { if(resReg && resReg.status == 400){
            setErrorReg(true)
        }
          console.log('сукины дети ошиблись ')
        }
    }
    
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

       {succseReg && <div className="succesReg success">successful registration</div>}
       {errorReg && <div className="succesReg error">A user with this name already exists</div>}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Вход
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Регистрация
          </button>
        </div>

        <h2>{activeTab === 'login' ? 'Вход в аккаунт' : 'Создать аккаунт'}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {activeTab === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  );
};


export default ModalAuth;