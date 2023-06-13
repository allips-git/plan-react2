import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./views/main";
import CustomerList from "./views/pages/customer/CustomerList";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/customer" element={<CustomerList />} />
    </Routes>
  );
}

export default App;
