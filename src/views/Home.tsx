import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import FooterComponent from "../components/commons/Footer";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Outlet />
      <FooterComponent />
    </div>
  )
}
