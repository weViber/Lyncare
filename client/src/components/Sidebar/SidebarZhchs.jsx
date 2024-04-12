import React, { useState, useEffect, useRef } from 'react';
import hamburgerIcon from './../images/hamburgermenu.png';
import closeIcon from './../images/x_close_icon.png';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className='sidebar-container' ref={sidebarRef}>
      <button className="sidebar-button" onClick={toggleSidebar}>
        <img src={isOpen ? closeIcon : hamburgerIcon} alt="햄버거 아이콘" />
      </button>
      {isOpen && (
        <div className='nav_link'>
          {/* <Link to="/" onClick={closeSidebar}><p>홈</p></Link> */}
          <Link to="/aboutZhchs" onClick={closeSidebar}><p>公司介绍</p></Link>
          <Link to="/ProductZhchs" onClick={closeSidebar}><p>产品</p></Link>
          <Link to="/SupportZhchs" onClick={closeSidebar}><p>服务</p></Link>
          <Link to="/ContactZhchs" onClick={closeSidebar}><p>咨询</p></Link>
          <Link to="/" onClick={closeSidebar}><p>🇰🇷 한국어</p></Link>
          <Link to="/Zh-chs" onClick={closeSidebar}><p>🇨🇳 华语(简体)</p></Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;