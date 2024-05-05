import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateAccount, CreateAccountVerificationMail, Home, Login, ResetPasswordVerificationMail } from "./pages";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="create-account-mail" element={<CreateAccountVerificationMail />} />
      <Route path="reset-password-mail" element={<ResetPasswordVerificationMail />} />
    </Route>
  )
);



function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
