import { Outlet } from "react-router-dom";

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

const Content = ({ children }) => <div className="content">{children}</div>;

export const Layout = () => (
  <Wrapper>
    <Content>
      <Outlet />
    </Content>
  </Wrapper>
);
