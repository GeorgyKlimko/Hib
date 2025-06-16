import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Импорт стилей

interface FooterLink {
  title: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Навигация',
      links: [
        { title: 'Home', url: '#' },
        { title: 'about', url: '#' },
        { title: 'Servise', url: '#' },
        { title: 'Контакты', url: '#' },
      ],
    },
    {
      title: 'Ресурсы',
      links: [
        { title: 'Документация', url: '#' },
        { title: 'FAQ', url: '#' },
        { title: 'Блог', url: '#' },
        { title: 'Поддержка', url: '#' },
      ],
    },
  ];

  const discordInviteLink = 'https://discord.gg/yTTRCDNd';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-logo">HIB</h2>
          <p className="footer-description">
            For those who like black.
          </p>
          
          <a
            href={discordInviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="discord-btn"
          >
            <FontAwesomeIcon icon={faDiscord} className="discord-icon" />
            Discord
          </a>
        </div>

        <div className="footer-links">
          {footerColumns.map((column, index) => (
            <div key={index} className="footer-column">
              <h3 className="footer-column-title">{column.title}</h3>
              <ul className="footer-links-list">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="footer-link">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;