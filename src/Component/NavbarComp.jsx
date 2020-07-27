import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/"></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/homepage" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/pelanggan" className="nav-link">Pelanggan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/transaksi" className="nav-link">Transaksi</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/laporan" className="nav-link">Laporan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/harga" className="nav-link">Harga</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/user" className="nav-link">Ganti Password</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;