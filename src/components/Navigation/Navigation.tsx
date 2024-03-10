import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <Link to="/about">about</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">projects</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">contact</Link>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navigation;

const Container = styled.div``;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
`;

const NavItem = styled.li`
  text-transform: uppercase;
`;
