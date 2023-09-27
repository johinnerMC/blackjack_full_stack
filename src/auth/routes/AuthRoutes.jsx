import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
    </Routes>
  );
};
