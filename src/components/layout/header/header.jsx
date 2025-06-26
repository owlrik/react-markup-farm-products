import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";

function Header() {
    return (
        <header className="page-header">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;
