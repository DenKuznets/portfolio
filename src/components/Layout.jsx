import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyles";
import { themeLight } from "../../utils";

const Layout = () => {
    return (
        <div>
            <ThemeProvider theme={themeLight}>
                <GlobalStyle />
                <Outlet />
            </ThemeProvider>
        </div>
    );
};

export default Layout;
