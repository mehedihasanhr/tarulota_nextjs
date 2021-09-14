//custom components 
import Topbar from './topbar';
import Navbar from './navbar';
import Sidebar from './sidebar';
import React, { useState } from 'react';
import Footer from './footer';
import PhoneMenu from './phoneMenu';


export default function Layout({ children }: any) {

  const [show, setShow] = useState<boolean>(false);


  const showSidebar = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setShow(true);
  }

  const closeSidebar = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setShow(false);
  }

  return (
    <>
      <Topbar />
      <Navbar showMenu={showSidebar}/>
      <Sidebar show={show} onClick={closeSidebar}/>
      <PhoneMenu/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}
