import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateUser } from "./pages/CreateUser";
import { UserDetails } from "./pages/UserDetails";
import { LoginUncontrolled } from "./pages/LoginUncontrolled";
import { LoginControlled } from "./pages/LoginControlled";
import { routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.CREATE_USER} element={<CreateUser />} />
        <Route path={routes.USER_DETAILS} element={<UserDetails />} />
        <Route path={routes.LOGIN_UNCONTROLLED} element={<LoginUncontrolled />} />
        <Route path={routes.LOGIN_CONTROLLED} element={<LoginControlled />} />
      </Routes>
    </BrowserRouter>
  );
};
