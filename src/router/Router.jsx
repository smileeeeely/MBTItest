import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import PageProfile from "../pages/PageProfile";
import PageResults from "../pages/PageResults";
import PageSignup from "../pages/PageSignup";
import PageTest from "../pages/PageTest";

const Router = () => {
  const PublicRoute = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const PrivateRoute = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/results" element={<PageResults />} />
          <Route path="/test" element={<PageTest />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signup" element={<PageSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
