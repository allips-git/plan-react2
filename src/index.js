import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import store from "./Store";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg3);
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles />
            <Container>
                <App />
            </Container>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();