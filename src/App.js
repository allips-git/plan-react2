import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./views/main";
import CustomerList from "./views/pages/customer/CustomerList";
import CustomerDetail from "./views/pages/customer/CustomerDetail";
import LoginInput from "./views/pages/login/LoginInput";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/customer/detail" element={<CustomerDetail />} />
        <Route path="/login" element={<LoginInput />} />
    </Routes>
  );
}

export default App;
