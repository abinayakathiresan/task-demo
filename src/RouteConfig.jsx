import React from "react";
import { Route, Routes } from "react-router-dom";
import FeesList from "./components/FeesList/FeesList";
import FeesManagement from "./components/feesManagement/FeesManagement";


const RouteConfig = ()=> {
    return(
        <Routes>
             <Route path="/" element={<FeesManagement/>} exact={true} /> 
            <Route path = "/fees-list" element = {<FeesList/>}  exact={true} />
        </Routes>
    )
}
export default RouteConfig;








