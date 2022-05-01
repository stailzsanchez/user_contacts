import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Layout, Menu, Row } from "antd";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  const { logout } = useActions();

  const loginHandle = () => {
    router.push(RouteNames.LOGIN);
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
                Log out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={loginHandle} key={2}>
              Sign in
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
