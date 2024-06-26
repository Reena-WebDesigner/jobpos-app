import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../pages/Container";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Addjob from "../pages/Addjob";
import Alljobs from "../pages/Alljobs";
import AppliedJobs from "../pages/Appliedjobs";
import Otp from "../pages/Otp";
import EmployeeProfile from "../pages/Employeeprofile";
import JobDetails from "../pages/Jobdetails";
import RecommondedJobs from "../pages/Recommendedjobs";
import EmployerJoblist from "../pages/Employerjoblist";
import UpdateJob from "../pages/Updatejob";
import AdminLogin from "../pages/Adminlogin";
import EmployerProfile from "../pages/Employerprofile";
import AllUsers from "../pages/Allusers";
import ChatBox from "../pages/Chat";
import LoadingScreen from "../pages/Loadingscreen";
import SkillProvider from "../context/SkillContext";
function MenuRouter() {
  const { credential, isLoading } = useContext(AuthContext);
//console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <SkillProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={credential ? <Alljobs /> : <Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/employeeprofile" element={<EmployeeProfile />} />
              <Route path="/employerprofile" element={<EmployerProfile />} />
              <Route path="/jobdetails" element={<JobDetails />} />
              <Route path="/employerjoblist" element={<EmployerJoblist />} />
              <Route path="/addjob" element={<Addjob />} />
              <Route path="/alljobs" element={<Alljobs />} />
              <Route path="/appliedjobs" element={<AppliedJobs />} />
              <Route path="/recommendedjobs" element={<RecommondedJobs />} />
              <Route path="/updatejob" element={<UpdateJob />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/allusers" element={<AllUsers />} />
              <Route path="/chatbox" element={<ChatBox />} />
              <Route path="/loadingscreen" element={<LoadingScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </SkillProvider>
      )}
    </>
  );
}
export default MenuRouter;
