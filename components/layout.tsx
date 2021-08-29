//custom components 
import Topbar from './topbar';
import Navbar from './navbar';


export default function Layout({ children }: any) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
    </>
  );
}
