import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateUser } from "./pages/CreateUser";
import { UserDetails } from "./pages/UserDetails";
import { routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.CREATE_USER} element={<CreateUser />} />
        <Route path={routes.USER_DETAILS} element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
