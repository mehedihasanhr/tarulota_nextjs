//default components
import dynamic from "next/dynamic";

const Topbar = dynamic(
    () => import("../components/topbar"),
    // eslint-disable-next-line react/display-name
    { loading: ()=> <p>Loading...</p>  }
  )
  

export default function Layout({ children }: any) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
