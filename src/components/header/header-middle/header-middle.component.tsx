import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styled from '@emotion/styled'

import { LogoLight } from '../../logo-light/logo-light.component';

const NavbarContainer = styled(Navbar)`
  background-color: var(--bs-white);
  padding-top: 0;
  padding-bottom: 0;
`

const NavbarCollapse = styled(Navbar.Collapse)`
  justify-content: end;
`

const HomeButton = styled(Navbar.Brand)`
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 0;
  display: block;
`

const NavItem = styled(Nav.Link)`
  text-transform: uppercase;
  line-height: 1.66rem;
  color: var(--bs-gray-700);
  font-size: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  text-decoration: none;

  &:last-child {
    padding-right: 0 !important;
  }
`

const NavToggler = styled(Navbar.Toggle)`
  width: 2.875rem;
  height: 2.875rem;
  border-width: 0.125rem;
  border-color: var(--bs-gray-200);
  padding: 0;
  border-radius: 50%;

  &:focus {
    box-shadow: none;
  }
`;

export const HeaderMiddle = () => {
  return (
    <NavbarContainer expand='xl'>
      <Container>
        <HomeButton href='#'>
          <LogoLight />
        </HomeButton>
        <NavToggler
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbarNav' 
          aria-controls='navbarNav' 
          aria-expanded='false' 
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </NavToggler>
        <NavbarCollapse id='navbarNav'>
          <Nav>
            <NavItem className='active' aria-current='page' href='#'>Home</NavItem>
            <NavItem href='#'>Our Fleet</NavItem>
            <NavItem href='#'>Service Rates</NavItem>
            <NavItem href='#'>News</NavItem>
            <NavItem href='#'>About Us</NavItem>
            <NavItem href='#'>Contact Us</NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </NavbarContainer>
  )
}
