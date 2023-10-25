import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

function AppLayout() {
  return (
    <div>
      <PageNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
