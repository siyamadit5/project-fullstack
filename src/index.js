import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Forgot from './components/Forgot/Forgot';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route }from "react-router-dom";
import Feed from './feed'
import { createTheme, ThemeProvider } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3ea6ff",
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" from element={<Login />}/>
      <Route path='signup' from element={<Signup />}/>
      <Route path='forgot' from element={<Forgot />}/>
      <Route path='feed' from element={<Feed />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
