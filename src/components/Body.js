import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <Outlet />
      </div>
    </>
  )
}

export default Body;