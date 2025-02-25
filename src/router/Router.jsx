import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import PageProfile from "../pages/PageProfile";
import PageResults from "../pages/PageResults";
import PageSignup from "../pages/PageSignup";
import PageTest from "../pages/PageTest";
import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";
import Header from "../components/Header";

const Router = () => {
  const ProtectedRoute = ({ authentication }) => {
    const { isLogin } = useContext(UserLoginContext);
    if (authentication) {
      return !isLogin ? <Navigate to="/login" /> : <Outlet />;
    } else {
      return !isLogin ? <Outlet /> : <Navigate to="/" />;
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route element={<ProtectedRoute authentication={true} />}>
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/results" element={<PageResults />} />
          <Route path="/test" element={<PageTest />} />
        </Route>
        <Route element={<ProtectedRoute authentication={false} />}>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signup" element={<PageSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
