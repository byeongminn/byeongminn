import { Footer, Header } from 'components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  margin: 0 auto;
  padding-inline: 1rem;
  max-width: 90rem;
`;
