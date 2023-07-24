import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./views/main";

// login
import LoginInput from "./views/pages/login/LoginInput";
import LoginWait from "./views/pages/login/LoginWait";
import JoinAgree from "./views/pages/login/JoinAgree";
import JoinUs from "./views/pages/login/JoinUs";
import JoinSetting from "./views/pages/login/JoinSetting";
import JoinAuth from "./views/pages/login/JoinAuth";

// customer
import CustomerList from "./views/pages/customer/CustomerList";
import CustomerDetail from "./views/pages/customer/CustomerDetail";
import CustomerUpload from "./views/pages/customer/CustomerUpload";

// product
import ProductChoice from "./views/pages/product/ProductChoice";

function App() {
  return (
    <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/customer/v" element={<CustomerDetail />} />
        <Route path="/customer/upload" element={<CustomerUpload />} />

        <Route path="/" element={<LoginInput />} />
        <Route path="/loginWait" element={<LoginWait />} />
        <Route path="/login/agree" element={<JoinAgree />} />
        <Route path="/login/joinus" element={<JoinUs />} />
        <Route path="/login/setting" element={<JoinSetting />} />
        <Route path="/login/auth" element={<JoinAuth />} />

        <Route path="/product" element={<ProductChoice />} />
    </Routes>
  );
}

export default App;
