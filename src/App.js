import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./views/main";
import CustomerList from "./views/pages/customer/CustomerList";
import LoginInput from "./views/pages/login/LoginInput";
import LoginWait from "./views/pages/login/LoginWait";
import JoinAgree from "./views/pages/login/JoinAgree";
import JoinUs from "./views/pages/login/JoinUs";
import JoinSetting from "./views/pages/login/JoinSetting";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/customer" element={<CustomerList />} />

        <Route path="/login" element={<LoginInput />} />
        <Route path="/loginWait" element={<LoginWait />} />
        <Route path="/login/agree" element={<JoinAgree />} />
        <Route path="/login/joinus" element={<JoinUs />} />
        <Route path="/login/setting" element={<JoinSetting />} />
    </Routes>
  );
}

export default App;
