import React from "react";
import { Route, Routes } from "react-router-dom";
import FeesList from "./components/FeesList/FeesList";
import FeesManagement from "./components/feesManagement/FeesManagement";
import User from "./components/User/User";
import UserLogin from "./components/UserLogin/UserLogin";


const RouteConfig = ()=> {
    return(
        <Routes>
            <Route path="/" element={<FeesManagement/>} exact={true} /> 
            <Route path = "/fees-list" element = {<FeesList/>}  exact={true} />
            <Route path = "/user_login" element = {<UserLogin/>}  exact={true} />
            <Route path = "/user_register" element = {<User/>}  exact={true} />
            <Route path = "/user_profile" element = {<FeesList/>}  exact={true} />
            <Route path = "/:action/:id" element = {<FeesManagement/>}  exact={true} />
        </Routes>
    )
}
export default RouteConfig;








