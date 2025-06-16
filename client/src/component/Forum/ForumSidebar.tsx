// ForumSidebar.tsx
import React, { useState } from 'react';
import { ForumSection } from './Forum';
import  './ForumSidebar.css';

interface ForumSidebarProps {
  sections: ForumSection[];
}

const ForumSidebar: React.FC<ForumSidebarProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({});

  const toggleSection = (sectionId: number) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="sidebar">
      {sections.map(section => (
        <div key={section.id} >
          <div 
            className="sectionHeader" 
            onClick={() => toggleSection(section.id)}
          >
            {section.title}
            <span >
              {openSections[section.id] ? '▼' : '▶'}
            </span>
          </div>
          {openSections[section.id] && (
            <div className="subsection">
              {section.subsections.map((sub, index) => (
                <div key={index} className="subsection">
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ForumSidebar;