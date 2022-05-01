import React, { FC, useEffect } from "react";
import "./css/root.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import { Layout } from "antd";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    const lsUser = localStorage.getItem("user");
    if (lsUser) {
      setUser(JSON.parse(lsUser) as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout style={{ backgroundColor: "white", overflow: "hidden" }}>
      <Navbar />
      <Layout.Content style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
