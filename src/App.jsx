import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Landing from "./domains/landing/Landing";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./domains/login/Login";
import Signup from "./domains/signup/Signup";
import { useEffect, useState } from "react";
import Home from "./domains/home/Home";

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState(!!sessionStorage.getItem('token'));
  useEffect(() => {
    setIsLogin(!!sessionStorage.getItem('token'));
  },[isLogin]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
